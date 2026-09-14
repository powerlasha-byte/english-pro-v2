"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Layout from "@/app/components/Layout";
import { categories } from "@/app/data/englishInContext/categories";
import { highImpactVerbs } from "@/app/data/englishInContext/highImpactVerbs";

function speakEnglish(text: string) {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    alert("ამ ბრაუზერში ტექსტის გახმოვანება არ არის მხარდაჭერილი.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;

  const englishVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("en"));

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}

function TranslationButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "დამალე ქართული თარგმანი" : "აჩვენე ქართული თარგმანი"}
      aria-expanded={isOpen}
      title={isOpen ? "დამალე თარგმანი" : "თარგმნე ქართულად"}
      className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
        isOpen
          ? "bg-violet-500/15 text-violet-300"
          : "text-slate-500 hover:bg-slate-800 hover:text-violet-300"
      }`}
    >
      GE
    </button>
  );
}

export default function EnglishInContextCategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;

  const [visibleTranslations, setVisibleTranslations] = useState<
    Record<string, boolean>
  >({});

  const toggleTranslation = (key: string) => {
    setVisibleTranslations((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const category = categories.find((item) => item.id === categoryId);
  const isHighImpactVerbs = categoryId === "high-impact-verbs";

  if (!category) {
    return (
      <Layout>
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-3xl font-bold text-white">
            Category not found
          </h1>

          <p className="mt-3 text-slate-400">
            ეს კატეგორია ვერ მოიძებნა.
          </p>

          <Link
            href="/english-in-context"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            ← ყველა კატეგორია
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
        <Link
          href="/english-in-context"
          className="mb-7 inline-flex items-center rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:bg-slate-900 hover:text-white"
        >
          ← ყველა კატეგორია
        </Link>

        <header className="mb-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-7 sm:p-9">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">
            {category.icon}
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
            English Pro · Learning Library
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {category.title}
          </h1>

          <p className="mt-2 text-lg text-violet-300">
            {category.georgianTitle}
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            {category.description}
          </p>

          {isHighImpactVerbs && (
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-sm text-violet-200">
                {highImpactVerbs.length} verb
                {highImpactVerbs.length === 1 ? "" : "s"}
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300">
                English + ქართული
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300">
                🔊 მოუსმინე წინადადებებს
              </span>
            </div>
          )}
        </header>

        {isHighImpactVerbs ? (
          <div className="space-y-10">
            {highImpactVerbs.map((verb) => {
              const introductionKey = `${verb.id}-introduction`;

              return (
                <section
                  key={verb.id}
                  className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
                >
                  {/* Verb heading */}
                  <div className="border-b border-slate-800 p-6 sm:p-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                      High-Impact Verb
                    </p>

                    <h2 className="text-3xl font-black tracking-wide text-white sm:text-4xl">
                      {verb.title}
                    </h2>

                    <p className="mt-2 text-violet-300">
                      {verb.georgianTitle}
                    </p>

                    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Introduction
                      </p>

                      <p className="leading-7 text-slate-300">
                        {verb.introduction}
                      </p>

                      {verb.georgianIntroduction && (
                        <div className="mt-3">
                          <TranslationButton
                            isOpen={Boolean(
                              visibleTranslations[introductionKey]
                            )}
                            onClick={() =>
                              toggleTranslation(introductionKey)
                            }
                          />

                          {visibleTranslations[introductionKey] && (
                            <p className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                              {verb.georgianIntroduction}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Patterns */}
                  <div className="p-5 sm:p-8">
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-white">
                        Usage patterns
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        გამოყენების ფორმები — ისწავლე მაგალითებით.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {verb.patterns.map((pattern, index) => {
                        const explanationKey =
                          `${verb.id}-${pattern.id}-explanation`;

                        return (
                          <article
                            key={pattern.id}
                            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50"
                          >
                            <div className="border-b border-slate-800 p-5">
                              <div className="flex items-start gap-3">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-bold text-violet-300">
                                  {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="min-w-0">
                                  <h4 className="text-lg font-bold text-white">
                                    {pattern.title}
                                  </h4>

                                  <code className="mt-2 inline-block rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-violet-300">
                                    {pattern.pattern}
                                  </code>
                                </div>
                              </div>

                              <div className="mt-4">
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                  Explanation
                                </p>

                                <p className="text-sm leading-6 text-slate-300">
                                  {pattern.explanation}
                                </p>

                                {pattern.georgianExplanation && (
                                  <div className="mt-3">
                                    <TranslationButton
                                      isOpen={Boolean(
                                        visibleTranslations[explanationKey]
                                      )}
                                      onClick={() =>
                                        toggleTranslation(explanationKey)
                                      }
                                    />

                                    {visibleTranslations[explanationKey] && (
                                      <p className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                                        {pattern.georgianExplanation}
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Example sentences */}
                            <div className="space-y-3 p-4 sm:p-5">
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Examples · მაგალითები
                              </p>

                              {pattern.examples.map((example, exampleIndex) => {
                                const exampleKey =
                                  `${verb.id}-${pattern.id}-example-${exampleIndex}`;

                                return (
                                  <div
                                    key={exampleKey}
                                    className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                                  >
                                    <div className="flex items-start gap-3">
                                      <p className="min-w-0 flex-1 font-medium leading-7 text-white">
                                        {example.english}
                                      </p>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          speakEnglish(example.english)
                                        }
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-500/20"
                                        aria-label={`მოუსმინე: ${example.english}`}
                                        title="მოუსმინე წინადადებას"
                                      >
                                        🔊
                                      </button>
                                    </div>

                                    <div className="mt-3">
                                      <TranslationButton
                                        isOpen={Boolean(
                                          visibleTranslations[exampleKey]
                                        )}
                                        onClick={() =>
                                          toggleTranslation(exampleKey)
                                        }
                                      />

                                      {visibleTranslations[exampleKey] && (
                                        <p className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                                          {example.georgian}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>

                  {/* Collocations */}
                  {verb.collocations?.length > 0 && (
                    <div className="border-t border-slate-800 p-5 sm:p-8">
                      <h3 className="text-xl font-bold text-white">
                        Useful collocations
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        ბუნებრივი სიტყვათა კომბინაციები
                      </p>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {verb.collocations.map((item, index) => {
                          const key = `${verb.id}-collocation-${index}`;

                          return (
                            <div
                              key={key}
                              className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                            >
                              <p className="font-semibold text-violet-300">
                                {item.phrase}
                              </p>

                              <div className="mt-3 flex items-start gap-3">
                                <p className="min-w-0 flex-1 text-sm leading-6 text-slate-300">
                                  {item.example}
                                </p>

                                <button
                                  type="button"
                                  onClick={() => speakEnglish(item.example)}
                                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 transition hover:bg-violet-500/20"
                                  aria-label={`მოუსმინე: ${item.example}`}
                                  title="მოუსმინე წინადადებას"
                                >
                                  🔊
                                </button>
                              </div>

                              <div className="mt-3">
                                <TranslationButton
                                  isOpen={Boolean(visibleTranslations[key])}
                                  onClick={() => toggleTranslation(key)}
                                />

                                {visibleTranslations[key] && (
                                  <p className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                                    {item.georgian}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Common mistakes */}
                  {verb.commonMistakes?.length > 0 && (
                    <div className="border-t border-slate-800 bg-rose-950/10 p-5 sm:p-8">
                      <h3 className="text-xl font-bold text-white">
                        Common mistakes
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        ხშირი შეცდომები — დაიმახსოვრე სწორი ფორმა.
                      </p>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {verb.commonMistakes.map((mistake, index) => {
                          const key = `${verb.id}-mistake-${index}`;

                          return (
                            <div
                              key={key}
                              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                            >
                              <p className="text-sm text-rose-300">
                                ✕ {mistake.wrong}
                              </p>

                              <div className="mt-2 flex items-start gap-3">
                                <p className="min-w-0 flex-1 text-sm font-semibold text-emerald-300">
                                  ✓ {mistake.correct}
                                </p>

                                <button
                                  type="button"
                                  onClick={() => speakEnglish(mistake.correct)}
                                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 transition hover:bg-violet-500/20"
                                  aria-label={`მოუსმინე სწორ ფორმას: ${mistake.correct}`}
                                  title="მოუსმინე სწორ ფორმას"
                                >
                                  🔊
                                </button>
                              </div>

                              <p className="mt-3 text-sm leading-6 text-slate-400">
                                {mistake.explanation}
                              </p>

                              {mistake.georgianExplanation && (
                                <div className="mt-3">
                                  <TranslationButton
                                    isOpen={Boolean(visibleTranslations[key])}
                                    onClick={() => toggleTranslation(key)}
                                  />

                                  {visibleTranslations[key] && (
                                    <p className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                                      {mistake.georgianExplanation}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="text-3xl">📚</div>

            <h2 className="mt-4 text-xl font-bold text-white">
              მასალა მალე დაემატება
            </h2>

            <p className="mt-2 leading-7 text-slate-400">
              ამ კატეგორიას ეტაპობრივად შევავსებთ ახსნებით, ქართული
              თარგმანებითა და ინგლისური აუდიო მაგალითებით.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}