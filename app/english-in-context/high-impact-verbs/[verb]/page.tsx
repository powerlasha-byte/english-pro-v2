"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Layout from "@/app/components/Layout";
import { highImpactVerbs } from "@/app/data/englishInContext/highImpactVerbs";

function speakEnglish(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    alert("ამ ბრაუზერში ტექსტის გახმოვანება არ არის მხარდაჭერილი.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
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
      aria-expanded={isOpen}
      aria-label={isOpen ? "დამალე ქართული თარგმანი" : "აჩვენე ქართული თარგმანი"}
      className={`rounded-md px-2 py-1 text-xs transition-colors ${
        isOpen
          ? "bg-violet-500/15 text-violet-300"
          : "text-slate-500 hover:bg-slate-800 hover:text-violet-300"
      }`}
    >
      GE
    </button>
  );
}

export default function HighImpactVerbPage() {
  const params = useParams();
  const verbId = params.verb as string;
  const verb = highImpactVerbs.find((item) => item.id === verbId);

  const [visibleTranslations, setVisibleTranslations] = useState<
    Record<string, boolean>
  >({});

  function toggleTranslation(key: string) {
    setVisibleTranslations((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  if (!verb) {
    return (
      <Layout>
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-3xl font-bold text-white">Verb not found</h1>
          <p className="mt-3 text-slate-400">ეს ზმნა ვერ მოიძებნა.</p>
          <Link
            href="/english-in-context/high-impact-verbs"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-500"
          >
            ← ყველა ზმნა
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
        <Link
          href="/english-in-context/high-impact-verbs"
          className="mb-7 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-violet-500 hover:bg-slate-900 hover:text-white"
        >
          ← ყველა ზმნა
        </Link>

        <header className="mb-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-violet-950/40 p-7 sm:p-9">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-300">
            English Pro · High-Impact Verbs
          </p>
          <h1 className="text-4xl font-black text-white">{verb.title}</h1>
          <p className="mt-2 text-lg text-violet-300">{verb.georgianTitle}</p>

          <p className="mt-5 leading-7 text-slate-300">{verb.introduction}</p>

          {verb.georgianIntroduction && (
            <div className="mt-3">
              <TranslationButton
                isOpen={Boolean(visibleTranslations.introduction)}
                onClick={() => toggleTranslation("introduction")}
              />
              {visibleTranslations.introduction && (
                <p className="mt-3 rounded-xl bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                  {verb.georgianIntroduction}
                </p>
              )}
            </div>
          )}
        </header>

        <section className="space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-white">Usage patterns</h2>
            <p className="mt-1 text-sm text-slate-400">
              გამოყენების ფორმები — ისწავლე მაგალითებით.
            </p>
          </div>

          {verb.patterns.map((pattern, index) => (
            <article
              key={pattern.id}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-bold text-violet-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white">
                      {pattern.title}
                    </h3>
                    <code className="mt-2 inline-block rounded-lg bg-slate-950 px-3 py-1.5 text-sm text-violet-300">
                      {pattern.pattern}
                    </code>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {pattern.explanation}
                </p>

                {pattern.georgianExplanation && (
                  <div className="mt-3">
                    <TranslationButton
                      isOpen={Boolean(
                        visibleTranslations[`${pattern.id}-explanation`]
                      )}
                      onClick={() =>
                        toggleTranslation(`${pattern.id}-explanation`)
                      }
                    />
                    {visibleTranslations[`${pattern.id}-explanation`] && (
                      <p className="mt-3 rounded-xl bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                        {pattern.georgianExplanation}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3 border-t border-slate-800 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Examples · მაგალითები
                </p>

                {pattern.examples.map((example, exampleIndex) => {
                  const key = `${pattern.id}-example-${exampleIndex}`;

                  return (
                    <div
                      key={key}
                      className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <p className="min-w-0 flex-1 leading-7 text-white">
                          {example.english}
                        </p>
                        <button
                          type="button"
                          onClick={() => speakEnglish(example.english)}
                          aria-label={`მოუსმინე: ${example.english}`}
                          title="მოუსმინე წინადადებას"
                          className="shrink-0 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-violet-200 hover:bg-violet-500/20"
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
                          <p className="mt-3 rounded-xl bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                            {example.georgian}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        {verb.collocations?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white">
              Useful collocations
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              ბუნებრივი სიტყვათა კომბინაციები
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {verb.collocations.map((item, index) => {
                const key = `collocation-${index}`;

                return (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <p className="font-semibold text-violet-300">{item.phrase}</p>
                    <div className="mt-3 flex items-start gap-3">
                      <p className="min-w-0 flex-1 text-sm leading-6 text-slate-300">
                        {item.example}
                      </p>
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.example)}
                        aria-label={`მოუსმინე: ${item.example}`}
                        className="shrink-0 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-violet-200 hover:bg-violet-500/20"
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
                        <p className="mt-3 rounded-xl bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                          {item.georgian}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {verb.commonMistakes?.length > 0 && (
          <section className="mt-10 rounded-2xl border border-rose-900/40 bg-rose-950/10 p-5 sm:p-7">
            <h2 className="text-2xl font-bold text-white">Common mistakes</h2>
            <p className="mt-1 text-sm text-slate-400">
              ხშირი შეცდომები — დაიმახსოვრე სწორი ფორმა.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {verb.commonMistakes.map((mistake, index) => {
                const key = `mistake-${index}`;

                return (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <p className="text-sm text-rose-300">✕ {mistake.wrong}</p>
                    <div className="mt-2 flex items-start gap-3">
                      <p className="min-w-0 flex-1 text-sm font-semibold text-emerald-300">
                        ✓ {mistake.correct}
                      </p>
                      <button
                        type="button"
                        onClick={() => speakEnglish(mistake.correct)}
                        aria-label={`მოუსმინე სწორ ფორმას: ${mistake.correct}`}
                        className="shrink-0 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-violet-200 hover:bg-violet-500/20"
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
                          <p className="mt-3 rounded-xl bg-violet-500/5 p-3 text-sm leading-6 text-slate-300">
                            {mistake.georgianExplanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}