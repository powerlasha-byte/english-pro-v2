"use client";

import Link from "next/link";
import { useState } from "react";

import Layout from "@/app/components/Layout";
import { spokenEnglish } from "@/app/data/englishInContext/spokenEnglish";

import { opinions } from "@/app/data/englishInContext/spoken/opinions";
import { agreeingDisagreeing } from "@/app/data/englishInContext/spoken/agreeingDisagreeing";
import { reacting } from "@/app/data/englishInContext/spoken/reacting";
import { clarifying } from "@/app/data/englishInContext/spoken/clarifying";
import { buyingTime } from "@/app/data/englishInContext/spoken/buyingTime";
import { interrupting } from "@/app/data/englishInContext/spoken/interrupting";
import { changingTopics } from "@/app/data/englishInContext/spoken/changingTopic";
import { naturalExpressions } from "@/app/data/englishInContext/spoken/naturalExpressions";

type SpokenPhrase = {
  english: string;
  georgian: string;
  situation?: string;
  situationGeorgian?: string;
};

type SpokenSection = {
  id: string;
  title: string;
  georgianTitle: string;
  explanation: string;
  georgianExplanation: string;
  phrases: SpokenPhrase[];
};

const suggestionsSection = spokenEnglish.find(
  (section) => section.id === "making-suggestions"
);

const allSections: SpokenSection[] = [
  opinions,
  agreeingDisagreeing,
  reacting,
  clarifying,
  buyingTime,
  interrupting,
  ...(suggestionsSection ? [suggestionsSection] : []),
  changingTopics,
  naturalExpressions,
];

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

export default function SpokenEnglishPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    {}
  );

  const [visibleTranslations, setVisibleTranslations] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections((previous) => ({
      ...previous,
      [sectionKey]: !previous[sectionKey],
    }));
  };

  const toggleTranslation = (translationKey: string) => {
    setVisibleTranslations((previous) => ({
      ...previous,
      [translationKey]: !previous[translationKey],
    }));
  };

  const totalPhrases = allSections.reduce(
    (total, section) => total + section.phrases.length,
    0
  );

  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
        <Link
          href="/english-in-context"
          className="mb-7 inline-flex items-center rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:bg-slate-900 hover:text-white"
        >
          ← ყველა კატეგორია
        </Link>

        {/* HEADER */}
        <header className="mb-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/40 p-7 sm:p-9">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">
            🗣️
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
            English Pro · Learning Library
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Spoken English
          </h1>

          <p className="mt-2 text-lg text-violet-300">
            სასაუბრო ინგლისური
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            ისწავლე ბუნებრივი გამოთქმები, ყოველდღიური ფრაზები და
            საუბარში გამოსაყენებელი წინადადებები.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-sm text-violet-200">
              {totalPhrases} ფრაზა
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300">
              {allSections.length} კატეგორია
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300">
              English + ქართული
            </span>
          </div>
        </header>

        {/* CATEGORIES */}
        <div className="space-y-4">
          {allSections.map((section, sectionIndex) => {
            const sectionKey = `${section.id}-${sectionIndex}`;
            const isOpen = Boolean(openSections[sectionKey]);

            const explanationKey = `${sectionKey}-explanation`;

            return (
              <section
                key={sectionKey}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                {/* CATEGORY HEADER */}
                <button
                  type="button"
                  onClick={() => toggleSection(sectionKey)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-800/60 sm:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-bold text-violet-300">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-bold text-white sm:text-xl">
                      {section.title}
                    </span>

                    <span className="mt-1 block text-sm text-violet-300">
                      {section.georgianTitle}
                    </span>

                    <span className="mt-2 block text-xs text-slate-500">
                      {section.phrases.length} ფრაზა
                    </span>
                  </span>

                  <span
                    className={`shrink-0 text-xl text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>

                {/* CATEGORY CONTENT */}
                {isOpen && (
                  <div className="border-t border-slate-800">
                    {/* EXPLANATION */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <p className="min-w-0 flex-1 leading-7 text-slate-300">
                          {section.explanation}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            speakEnglish(section.explanation)
                          }
                          title="მოუსმინე ახსნას"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-500/20"
                        >
                          🔊
                        </button>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            toggleTranslation(explanationKey)
                          }
                           className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900  px-3 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                        >
                          {visibleTranslations[explanationKey]
                            ? "Hide"
                            : "GE"}
                        </button>
                      </div>

                      {visibleTranslations[explanationKey] && (
                        <p className="mt-3 rounded-xl bg-slate-800 p-4 text-sm leading-6 text-slate-300">
                          {section.georgianExplanation}
                        </p>
                      )}
                    </div>

                    {/* PHRASES */}
                    <div className="space-y-3 border-t border-slate-800 p-4 sm:p-6">
                      {section.phrases.map((phrase, phraseIndex) => {
                        const phraseKey = `${sectionKey}-phrase-${phraseIndex}`;

                        const phraseTranslationKey = `${phraseKey}-translation`;

                        const situationTranslationKey = `${phraseKey}-situation`;

                        return (
                          <article
                            key={phraseKey}
                            className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                          >
                            {/* PHRASE */}
                            <div className="flex items-center gap-3">
                              <p className="min-w-0 flex-1 leading-7 text-white">
                                {phrase.english}
                              </p>

                              {/* PHRASE ACTIONS */}
                              <div className="flex w-[90px] shrink-0 items-center justify-end gap-3">
                                <button
                                  type="button"
                                  onClick={() =>
                                    speakEnglish(phrase.english)
                                  }
                                  aria-label={`მოუსმინე: ${phrase.english}`}
                                  title="მოუსმინე ფრაზას"
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-400/25 bg-violet-500/10 text-violet-200 transition hover:border-violet-400/60 hover:bg-violet-500/20"
                                >
                                  🔊
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleTranslation(
                                      phraseTranslationKey
                                    )
                                  }
                                   className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900  px-3 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                                >
                                  GE
                                </button>
                              </div>
                            </div>

                            {/* PHRASE TRANSLATION */}
                            {visibleTranslations[
                              phraseTranslationKey
                            ] && (
                              <p className="mt-3 rounded-xl bg-slate-800 p-4 text-sm leading-6 text-slate-300">
                                {phrase.georgian}
                              </p>
                            )}

                            {/* SITUATION */}
                            {phrase.situation && (
                              <div className="mt-4 border-t border-slate-800 pt-3">
                                <div className="flex items-center gap-3">
                                  <p className="min-w-0 flex-1 text-sm leading-5 text-slate-500">
                                    <span className="font-semibold text-slate-400">
                                      situation:
                                    </span>{" "}
                                    {phrase.situation}
                                  </p>

                                  {/* SITUATION ACTIONS */}
                                  <div className="flex w-[90px] shrink-0 items-center justify-end gap-3">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        speakEnglish(
                                          phrase.situation!
                                        )
                                      }
                                      title="მოუსმინე სიტუაციას"
                                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-violet-500 hover:text-violet-300"
                                    >
                                      🔊
                                    </button>

                                    {phrase.situationGeorgian && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          toggleTranslation(
                                            situationTranslationKey
                                          )
                                        }
                                          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900  px-3 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                                      >
                                        GE
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {phrase.situationGeorgian &&
                                  visibleTranslations[
                                    situationTranslationKey
                                  ] && (
                                    <p className="mt-3 rounded-xl bg-slate-800 p-3 text-sm leading-5 text-slate-300">
                                      {phrase.situationGeorgian}
                                    </p>
                                  )}
                              </div>
                            )}
                          </article>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}