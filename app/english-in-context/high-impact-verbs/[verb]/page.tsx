"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Layout from "@/app/components/Layout";
import { highImpactVerbs } from "@/app/data/englishInContext/highImpactVerbs";

type Section = "all" | "patterns" | "collocations" | "mistakes";

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
      aria-label={
        isOpen ? "დამალე ქართული თარგმანი" : "აჩვენე ქართული თარგმანი"
      }
      className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
        isOpen
          ? "border-violet-300/25 bg-violet-400/10 text-violet-200"
          : "border-slate-700/70 text-slate-400 hover:border-violet-300/30 hover:bg-slate-800/60 hover:text-violet-200"
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

  const [activeSection, setActiveSection] = useState<Section>("all");

  const [visibleTranslations, setVisibleTranslations] = useState<
    Record<string, boolean>
  >({});

  function toggleTranslation(key: string) {
    setVisibleTranslations((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  const showPatterns =
    activeSection === "all" || activeSection === "patterns";

  const showCollocations =
    activeSection === "all" || activeSection === "collocations";

  const showMistakes =
    activeSection === "all" || activeSection === "mistakes";

  if (!verb) {
    return (
      <Layout>
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-700/70 bg-slate-900/80 p-8">
          <h1 className="text-3xl font-bold text-slate-100">
            Verb not found
          </h1>
          <p className="mt-3 text-slate-400">ეს ზმნა ვერ მოიძებნა.</p>

          <Link
            href="/english-in-context/high-impact-verbs"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            ← ყველა ზმნა
          </Link>
        </div>
      </Layout>
    );
  }

  const sectionButtons: {
    id: Section;
    label: string;
    icon: string;
  }[] = [
    { id: "all", label: "All", icon: "▦" },
    { id: "patterns", label: "Usage Patterns", icon: "▦" },
    { id: "collocations", label: "Collocations", icon: "↗" },
    { id: "mistakes", label: "Common Mistakes", icon: "⚠" },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
        <Link
          href="/english-in-context/high-impact-verbs"
          className="mb-7 inline-flex rounded-xl border border-slate-700/70 bg-slate-900/50 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-300/40 hover:bg-slate-900 hover:text-slate-100"
        >
          ← ყველა ზმნა
        </Link>

        {/* Verb introduction */}
        <header className="mb-8 rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/30 p-7 sm:p-9">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-300">
            English Pro · High-Impact Verbs
          </p>

          <h1 className="text-4xl font-black text-slate-100">
            {verb.title}
          </h1>

          <p className="mt-2 text-lg font-medium text-violet-200">
            {verb.georgianTitle}
          </p>

          <p className="mt-5 leading-7 text-slate-300">
            {verb.introduction}
          </p>

          {verb.georgianIntroduction && (
            <div className="mt-3">
              <TranslationButton
                isOpen={Boolean(visibleTranslations.introduction)}
                onClick={() => toggleTranslation("introduction")}
              />

              {visibleTranslations.introduction && (
                <p className="mt-3 rounded-xl border border-violet-300/15 bg-violet-400/[0.06] p-3 text-sm leading-6 text-slate-200">
                  {verb.georgianIntroduction}
                </p>
              )}
            </div>
          )}
        </header>

        {/* Section filter */}
        <div className="mb-7 flex flex-wrap gap-2">
          {sectionButtons.map((tab) => {
            const isActive = activeSection === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSection(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-violet-400/40 bg-violet-600/90 text-white"
                    : "border-slate-700/70 bg-slate-900/70 text-slate-300 hover:border-violet-300/30 hover:bg-slate-800/80 hover:text-slate-100"
                }`}
              >
                <span aria-hidden="true">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Usage patterns */}
       {/* Usage patterns */}
{showPatterns && (
  <section className="space-y-4">
    <div className="mb-1">
      <h2 className="text-2xl font-bold text-slate-100">
        Usage patterns
      </h2>
      <p className="mt-1 text-sm text-slate-400">
        გამოყენების ფორმები — ისწავლე მაგალითებით.
      </p>
    </div>

    {verb.patterns.map((pattern, index) => (
      <article
        key={pattern.id}
        className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70"
      >
        {/* Pattern heading */}
 
<div className="p-4 sm:p-5">
  <div className="flex flex-wrap items-center gap-3">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-300/15 bg-violet-400/10 text-sm font-bold text-violet-200">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="flex min-w-0 flex-wrap items-center gap-2">
      <h3 className="rounded-lg border border-slate-700/60 bg-slate-950/70 px-3 py-1.5 text-base font-bold text-slate-100 sm:text-lg">
        {pattern.title}
      </h3>

      <code className="rounded-lg border border-slate-700/60 bg-slate-950/70 px-3 py-1.5 text-sm text-violet-200">
        ({pattern.pattern})
      </code>
    </div>
  </div>

          {/* Explanation */}
          <div className="mt-4 rounded-xl bg-slate-800/35 px-3.5 py-3">
            <p className="text-sm leading-6 text-slate-300">
              {pattern.explanation}
            </p>

            {pattern.georgianExplanation && (
              <div className="mt-2">
                <TranslationButton
                  isOpen={Boolean(
                    visibleTranslations[`${pattern.id}-explanation`]
                  )}
                  onClick={() =>
                    toggleTranslation(`${pattern.id}-explanation`)
                  }
                />

                {visibleTranslations[`${pattern.id}-explanation`] && (
                  <p className="mt-2 border-l-2 border-violet-300/30 pl-3 text-sm leading-6 text-slate-200">
                    {pattern.georgianExplanation}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Examples */}
        <div className="border-t border-slate-700/60 px-4 py-3 sm:px-5">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Examples <span className="px-1 text-slate-600">·</span> მაგალითები
          </p>

          <div className="space-y-2">
            {pattern.examples.map((example, exampleIndex) => {
              const key = `${pattern.id}-example-${exampleIndex}`;

              return (
                <div
                  key={key}
                  className="rounded-xl border border-slate-700/50 bg-slate-950/35 px-3.5 py-3"
                >
                  <div className="flex items-start gap-3">
                    <p className="min-w-0 flex-1 text-sm leading-6 text-slate-100">
                      {example.english}
                    </p>

                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => speakEnglish(example.english)}
                        aria-label={`მოუსმინე: ${example.english}`}
                        title="მოუსმინე წინადადებას"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/[0.07] text-sm text-violet-200 transition hover:border-violet-300/40 hover:bg-violet-400/[0.14]"
                      >
                        🔊
                      </button>

                      <TranslationButton
                        isOpen={Boolean(visibleTranslations[key])}
                        onClick={() => toggleTranslation(key)}
                      />
                    </div>
                  </div>

                  {visibleTranslations[key] && (
                    <p className="mt-2 border-l-2 border-violet-300/30 pl-3 text-sm leading-6 text-slate-300">
                      {example.georgian}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </article>
    ))}
  </section>
)}
        {/* Collocations */}
        {showCollocations && verb.collocations?.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-100">
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
                    className="rounded-xl border border-slate-700/70 bg-slate-900/80 p-4"
                  >
                    <p className="font-semibold text-violet-200">
                      {item.phrase}
                    </p>

                    <div className="mt-3 flex items-start gap-3">
                      <p className="min-w-0 flex-1 text-sm leading-6 text-slate-300">
                        {item.example}
                      </p>

                      <button
                        type="button"
                        onClick={() => speakEnglish(item.example)}
                        aria-label={`მოუსმინე: ${item.example}`}
                        className="shrink-0 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-3 py-2 text-violet-200 transition hover:border-violet-300/40 hover:bg-violet-400/[0.14]"
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
                        <p className="mt-3 rounded-xl border border-violet-300/15 bg-violet-400/[0.06] p-3 text-sm leading-6 text-slate-200">
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

        {/* Common mistakes */}
        {showMistakes && verb.commonMistakes?.length > 0 && (
          <section className="mt-10 rounded-2xl border border-rose-900/30 bg-rose-950/[0.07] p-5 sm:p-7">
            <h2 className="text-2xl font-bold text-slate-100">
              Common mistakes
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              ხშირი შეცდომები — დაიმახსოვრე სწორი ფორმა.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {verb.commonMistakes.map((mistake, index) => {
                const key = `mistake-${index}`;

                return (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4"
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
                        aria-label={`მოუსმინე სწორ ფორმას: ${mistake.correct}`}
                        className="shrink-0 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-3 py-2 text-violet-200 transition hover:border-violet-300/40 hover:bg-violet-400/[0.14]"
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
                          <p className="mt-3 rounded-xl border border-violet-300/15 bg-violet-400/[0.06] p-3 text-sm leading-6 text-slate-200">
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