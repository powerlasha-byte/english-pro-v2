"use client";

import { useState } from "react";
import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { grammarInContext } from "@/app/data/englishInContext/grammarInContext";
import { cleftSentences } from "@/app/data/englishInContext/grammar/cleftSentences";
import { ellipsis } from "@/app/data/englishInContext/grammar/ellipsis";


function TranslationToggle({
  english,
  georgian,
}: {
  english: string;
  georgian?: string;
}) {
  const [showGeorgian, setShowGeorgian] = useState(false);

  if (!georgian) {
    return (
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {english}
      </p>
    );
  }

  return (
    <div className="mt-2">
      <div className="flex items-start gap-2">
        <p className="min-w-0 flex-1 text-sm text-gray-600 dark:text-gray-300">
          {english}
        </p>

        <button
          type="button"
          onClick={() => setShowGeorgian((current) => !current)}
          aria-label={
            showGeorgian
              ? "Hide Georgian translation"
              : "Show Georgian translation"
          }
          aria-expanded={showGeorgian}
          className="shrink-0 rounded-md border border-slate-700 bg-transparent px-2 py-1 text-xs font-medium text-slate-400 transition hover:border-slate-500 hover:bg-slate-800/60 hover:text-slate-200"
        >
          GE
        </button>
      </div>

      {showGeorgian && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {georgian}
        </p>
      )}
    </div>
  );
}

function ExampleRow({
  english,
  georgian,
}: {
  english: string;
  georgian?: string;
}) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
      <div className="min-w-0 flex-1">
        <TranslationToggle english={english} georgian={georgian} />
      </div>

      <button
        type="button"
        onClick={() => speak(english)}
        aria-label={`Listen: ${english}`}
        className="shrink-0 rounded-lg p-2 text-indigo-600 transition hover:bg-indigo-100 dark:text-indigo-400 dark:hover:bg-gray-700"
      >
        🔊
      </button>
    </div>
  );
}

export default function GrammarInContextPage() {
const [selectedTopic, setSelectedTopic] = useState<
  "tenses" | "conditionals" | "cleft-sentences" | "ellipsis"
>("tenses");
  const [selectedGroup, setSelectedGroup] = useState("all");

  const tensesTopic = grammarInContext.find(
    (item) => item.id === "tenses"
  );
  const conditionalsTopic = grammarInContext.find(
    (item) => item.id === "conditionals"
  );

  if (!tensesTopic || !conditionalsTopic) {
    return (
      <Layout>
        <div className="p-6">
          <BackButton
            href="/english-in-context"
            label="Back to English in Context"
          />
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Grammar material not found.
          </p>
        </div>
      </Layout>
    );
  }

  const groups =
    selectedGroup === "all"
      ? tensesTopic.lesson.groups
      : tensesTopic.lesson.groups.filter(
          (group) => group.id === selectedGroup
        );
  const activeGrammar =
    selectedTopic === "cleft-sentences" ? cleftSentences : ellipsis;
  return (
    <Layout>
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6">
        <BackButton
          href="/english-in-context"
          label="Back to English in Context"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTopic("tenses")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedTopic === "tenses"
                ? "bg-indigo-600 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            Tenses
          </button>

          <button
            type="button"
            onClick={() => setSelectedTopic("conditionals")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedTopic === "conditionals"
                ? "bg-indigo-600 text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            }`}
          >
            Conditionals
          </button> 


<button
  type="button"
  onClick={() => setSelectedTopic("cleft-sentences")}
  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
    selectedTopic === "cleft-sentences"
      ? "bg-indigo-600 text-white"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
  }`}
>
  Cleft Sentences
</button>


<button
  type="button"
  onClick={() => setSelectedTopic("ellipsis")}
  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
    selectedTopic === "ellipsis"
      ? "bg-indigo-600 text-white"
      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
  }`}
>
  Ellipsis
</button>



        </div> 

        

        {selectedTopic === "tenses" ? (
          <>
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                    Grammar in Context
                  </p>

                  <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {tensesTopic.title}
                  </h1>

                  <TranslationToggle
                    english=""
                    georgian={tensesTopic.georgianTitle}
                  />

                  <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
                    {tensesTopic.description}
                  </p>

                  <TranslationToggle
                    english=""
                    georgian={tensesTopic.georgianDescription}
                  />
                </div>
              </div>

              {tensesTopic.lesson.learningNote && (
                <div className="mt-6 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
                  <h2 className="font-semibold text-indigo-950 dark:text-indigo-200">
                    {tensesTopic.lesson.learningNote.title}
                  </h2>

                  <TranslationToggle
                    english={tensesTopic.lesson.learningNote.explanation}
                    georgian={
                      tensesTopic.lesson.learningNote.georgianExplanation
                    }
                  />
                </div>
              )}
            </section>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All" },
                { id: "present", label: "Present" },
                { id: "past", label: "Past" },
                { id: "future", label: "Future" },
              ].map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setSelectedGroup(group.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedGroup === group.id
                      ? "bg-indigo-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {groups.map((group) => (
                <section key={group.id} className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h2>

                    <TranslationToggle
                      english=""
                      georgian={group.georgianTitle}
                    />

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {group.description}
                    </p>

                    <TranslationToggle
                      english=""
                      georgian={group.georgianDescription}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {group.tenses.map((tense) => (
                      <article
                        key={tense.id}
                        className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6"
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {tense.title}
                        </h3>

                        <TranslationToggle
                          english=""
                          georgian={tense.georgianTitle}
                        />

                        <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Core meaning
                          </p>

                          <TranslationToggle
                            english={tense.coreMeaning}
                            georgian={tense.georgianCoreMeaning}
                          />
                        </div>

                        <div className="mt-5">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Structure
                          </h4>

                          <div className="mt-2 space-y-2">
                            {tense.structure.map((item, index) => (
                              <div
                                key={`${tense.id}-structure-${index}`}
                                className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                              >
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                  {item.label}
                                </p>

                                <p className="mt-1 font-mono text-sm text-gray-900 dark:text-gray-100">
                                  {item.formula}
                                </p>

                                {item.note && (
                                  <TranslationToggle
                                    english={item.note}
                                    georgian={item.georgianNote}
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            When to use it
                          </h4>

                          <div className="mt-3 space-y-4">
                            {tense.whenToUse.map((use, index) => (
                              <div key={`${tense.id}-use-${index}`}>
                                <p className="font-medium text-gray-800 dark:text-gray-200">
                                  {use.title}
                                </p>

                                <TranslationToggle
                                  english={use.explanation}
                                  georgian={use.georgianExplanation}
                                />

                                {use.example && (
                                  <div className="mt-2">
                                    <ExampleRow
                                      english={use.example.english}
                                      georgian={use.example.georgian}
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {tense.examples?.length > 0 && (
                          <div className="mt-5">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              More examples
                            </h4>

                            <div className="mt-2 space-y-2">
                              {tense.examples.map((example, index) => (
                                <ExampleRow
                                  key={`${tense.id}-example-${index}`}
                                  english={example.english}
                                  georgian={example.georgian}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {tense.signalWords?.length > 0 && (
                          <div className="mt-5">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Signal words
                            </h4>

                            <div className="mt-2 flex flex-wrap gap-2">
                              {tense.signalWords.map((word) => (
                                <span
                                  key={word}
                                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200"
                                >
                                  {word}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {tense.commonMistakes?.length > 0 && (
                          <div className="mt-5">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Common mistakes
                            </h4>

                            <div className="mt-2 space-y-3">
                              {tense.commonMistakes.map((mistake, index) => (
                                <div
                                  key={`${tense.id}-mistake-${index}`}
                                  className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20"
                                >
                                  <p className="text-sm text-red-700 dark:text-red-300">
                                    <span className="font-semibold">
                                      Wrong:
                                    </span>{" "}
                                    {mistake.wrong}
                                  </p>

                                  <p className="mt-1 text-sm text-green-800 dark:text-green-300">
                                    <span className="font-semibold">
                                      Correct:
                                    </span>{" "}
                                    {mistake.correct}
                                  </p>

                                  <TranslationToggle
                                    english={mistake.explanation}
                                    georgian={mistake.georgianExplanation}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </>

             
        ) : selectedTopic === "conditionals" ? (
          <>
            <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                Grammar in Context
              </p>

              <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {conditionalsTopic.title}
              </h1>

              <TranslationToggle
                english=""
                georgian={conditionalsTopic.georgianTitle}
              />

              <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
                {conditionalsTopic.lesson.introduction}
              </p>

              <TranslationToggle
                english=""
                georgian={conditionalsTopic.lesson.georgianIntroduction}
              />

              {conditionalsTopic.lesson.learningNote && (
                <div className="mt-6 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
                  <h2 className="font-semibold text-indigo-950 dark:text-indigo-200">
                    {conditionalsTopic.lesson.learningNote.title}
                  </h2>

                  <TranslationToggle
                    english={conditionalsTopic.lesson.learningNote.explanation}
                    georgian={
                      conditionalsTopic.lesson.learningNote.georgianExplanation
                    }
                  />
                </div>
              )}
            </section>

            <div className="space-y-8">
              {conditionalsTopic.lesson.types.map((conditional) => (
                <article
                  key={conditional.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {conditional.title}
                  </h2>

                  <TranslationToggle
                    english=""
                    georgian={conditional.georgianTitle}
                  />

                  <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      Core meaning
                    </p>

                    <TranslationToggle
                      english={conditional.coreMeaning}
                      georgian={conditional.georgianCoreMeaning}
                    />
                  </div>

                  <div className="mt-5">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Structure
                    </h3>

                    <div className="mt-2 space-y-2">
                      {conditional.structure.map((item, index) => (
                        <div
                          key={`${conditional.id}-structure-${index}`}
                          className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                            {item.label}
                          </p>

                          <p className="mt-1 font-mono text-sm text-gray-900 dark:text-gray-100">
                            {item.formula}
                          </p>

                          {item.note && (
                            <TranslationToggle
                              english={item.note}
                              georgian={item.georgianNote}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {conditional.examples.length > 0 && (
                    <div className="mt-5">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Examples
                      </h3>

                      <div className="mt-2 space-y-2">
                        {conditional.examples.map((example, index) => (
                          <ExampleRow
                            key={`${conditional.id}-example-${index}`}
                            english={example.english}
                            georgian={example.georgian}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {conditional.commonMistakes.length > 0 && (
                    <div className="mt-5">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Common mistakes
                      </h3>

                      <div className="mt-2 space-y-3">
                        {conditional.commonMistakes.map((mistake, index) => (
                          <div
                            key={`${conditional.id}-mistake-${index}`}
                            className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20"
                          >
                            <p className="text-sm text-red-700 dark:text-red-300">
                              <span className="font-semibold">Wrong:</span>{" "}
                              {mistake.wrong}
                            </p>

                            <p className="mt-1 text-sm text-green-800 dark:text-green-300">
                              <span className="font-semibold">Correct:</span>{" "}
                              {mistake.correct}
                            </p>

                            <TranslationToggle
                              english={mistake.explanation}
                              georgian={mistake.georgianExplanation}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
                  ) : (
            <>
              <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                  Grammar in Context
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {activeGrammar.title}
                </h1>

                <TranslationToggle
                  english=""
                  georgian={activeGrammar.georgianTitle}
                />

                <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
                  {activeGrammar.introduction}
                </p>

                <TranslationToggle
                  english=""
                  georgian={activeGrammar.georgianIntroduction}
                />

                <div className="mt-6 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/30">
                  <h2 className="font-semibold text-indigo-950 dark:text-indigo-200">
                    {activeGrammar.learningNote.title}
                  </h2>

                  <TranslationToggle
                    english={activeGrammar.learningNote.explanation}
                    georgian={activeGrammar.learningNote.georgianExplanation}
                  />
                </div>
              </section>

              <div className="space-y-8">
                {activeGrammar.types.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>

                    <TranslationToggle
                      english=""
                      georgian={item.georgianTitle}
                    />

                    <div className="mt-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Core meaning
                      </p>

                      <TranslationToggle
                        english={item.coreMeaning}
                        georgian={item.georgianCoreMeaning}
                      />
                    </div>

                    <div className="mt-5">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Structure
                      </h3>

                      <div className="mt-2 space-y-2">
                        {item.structure.map((structureItem, index) => (
                          <div
                            key={`${item.id}-structure-${index}`}
                            className="rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                          >
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                              {structureItem.label}
                            </p>

                            <p className="mt-1 font-mono text-sm text-gray-900 dark:text-gray-100">
                              {structureItem.formula}
                            </p>

                            {structureItem.note && (
                              <TranslationToggle
                                english={structureItem.note}
                                georgian={structureItem.georgianNote}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {item.examples.length > 0 && (
                      <div className="mt-5">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Examples
                        </h3>

                        <div className="mt-2 space-y-2">
                          {item.examples.map((example, index) => (
                            <ExampleRow
                              key={`${item.id}-example-${index}`}
                              english={example.english}
                              georgian={example.georgian}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {item.commonMistakes.length > 0 && (
                      <div className="mt-5">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Common mistakes
                        </h3>

                        <div className="mt-2 space-y-3">
                          {item.commonMistakes.map((mistake, index) => (
                            <div
                              key={`${item.id}-mistake-${index}`}
                              className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20"
                            >
                              <p className="text-sm text-red-700 dark:text-red-300">
                                <span className="font-semibold">Wrong:</span>{" "}
                                {mistake.wrong}
                              </p>

                              <p className="mt-1 text-sm text-green-800 dark:text-green-300">
                                <span className="font-semibold">Correct:</span>{" "}
                                {mistake.correct}
                              </p>

                              <TranslationToggle
                                english={mistake.explanation}
                                georgian={mistake.georgianExplanation}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </>
          )}
    
        
      </main>
    </Layout>
  );
}