"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { getUnitData } from "@/app/lib/directMethod";

export default function VocabularyPage() {
  const { id } = useParams();

  const { vocabulary } = getUnitData(id as string);

  const [showWordTranslation, setShowWordTranslation] =
    useState<number | null>(null);

  const [showSentenceTranslation, setShowSentenceTranslation] =
    useState<number | null>(null);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-8">

        {/* Back Button */}
        <div className="mb-6">
          <BackButton
            href={`/direct-method/unit/${id}`}
            label="Back to Unit"
          />
        </div>

        {/* Title */}
        <h1 className="mb-8 text-4xl font-bold text-white">
          📖 Unit {id} Vocabulary
        </h1>

        {/* Vocabulary Cards */}
        <div className="grid gap-5">

          {vocabulary.map((word) => {
            const wordTranslationVisible =
              showWordTranslation === word.id;

            const sentenceTranslationVisible =
              showSentenceTranslation === word.id;

            return (
              <div
                key={word.id}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
              >

                {/* ========================= */}
                {/* WORD */}
                {/* ========================= */}

                <div className="flex items-center justify-between gap-4">

                  <h2 className="text-3xl font-bold text-violet-400">
                    {word.english}
                  </h2>

                  <div className="flex items-center gap-2">

                    {/* Word Sound */}
                    <button
                      onClick={() => speak(word.english)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                      title="Listen"
                    >
                      🔊
                    </button>

                    {/* Word Translation */}
                    <button
                      onClick={() =>
                        setShowWordTranslation(
                          wordTranslationVisible ? null : word.id
                        )
                      }
                     className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900  px-3 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                      title="Show translation"
                    >
                      GE
                    </button>

                  </div>
                </div>

                {/* Word Translation */}
                {wordTranslationVisible && (
                  <p className="mt-2 text-xl text-white">
                    {word.georgian}
                  </p>
                )}

                {/* Pronunciation */}
                <p className="mt-2 text-slate-400">
                  {word.pronunciation}
                </p>

                {/* ========================= */}
                {/* SENTENCE */}
                {/* ========================= */}

                <div className="mt-6 flex items-start justify-between gap-4">

                  <div className="flex-1">

                    {/* English Sentence */}
                    <p className="text-lg text-white">
                      {word.sentence}
                    </p>

                    {/* Sentence Translation */}
                    {sentenceTranslationVisible && (
                      <p className="mt-2 text-slate-400">
                        {word.georgianSentence}
                      </p>
                    )}

                  </div>

                  <div className="flex items-center gap-2">

                    {/* Sentence Sound */}
                    <button
                      onClick={() => speak(word.sentence)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                      title="Listen to example"
                    >
                      🔊
                    </button>

                    {/* Sentence Translation */}
                    <button
                      onClick={() =>
                        setShowSentenceTranslation(
                          sentenceTranslationVisible ? null : word.id
                        )
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900  px-3 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-slate-800 hover:text-white"
                      title="Show translation"
                    >
                      GE
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </Layout>
  );
}