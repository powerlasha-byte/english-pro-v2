"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { allWords } from "../../data";

export default function LearnedPage() {
  const [words, setWords] =
    useState<any[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "learnedWords"
      );

    if (!saved) return;

    const learnedNames =
      JSON.parse(saved);

    const fullWords =
      allWords.filter((w) =>
        learnedNames.includes(
          w.english
        )
      );

    setWords(fullWords);
  }, []);

  const speak = (
    text: string,
    lang = "en-US"
  ) => {
    const utterance =
      new SpeechSynthesisUtterance(
        text
      );

    utterance.lang = lang;

    speechSynthesis.speak(
      utterance
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <Link
        href="/flashcards"
        className="bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl inline-block mb-8"
      >
        ← Back to Flashcards
      </Link>

      <h1 className="text-5xl font-bold mb-10">
        📚 Learned Words
      </h1>

      {words.length === 0 ? (
        <p className="text-slate-400 text-xl">
          No learned words yet 😢
        </p>
      ) : (
        <div className="space-y-8">

          {words.map((word) => (
            <div
              key={`${word.category}-${word.english}`}
              className="bg-slate-900 rounded-3xl p-8"
            >

              <h2 className="text-5xl font-bold text-violet-300 mb-6">
                {word.english}
              </h2>

              <div className="flex gap-3 mb-6 flex-wrap">

                <span className="bg-violet-700 px-3 py-1 rounded-full text-sm">
                  📂 {word.category}
                </span>

                {word.difficulty && (
                  <span className="bg-cyan-700 px-3 py-1 rounded-full text-sm">
                    📈 {word.difficulty}
                  </span>
                )}

              </div>

              <div className="space-y-3">

                <div className="bg-slate-800 p-4 rounded-xl">
                  <span className="text-green-400 font-bold">
                    GE
                  </span>{" "}
                  {word.georgian}
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <span className="text-cyan-400 font-bold">
                    RU
                  </span>{" "}
                  {word.russian}
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <span className="text-yellow-400 font-bold">
                    EN
                  </span>{" "}
                  {word.sentence}
                </div>

                {word.russianSentence && (
                  <div className="bg-slate-800 p-4 rounded-xl">
                    <span className="text-blue-400 font-bold">
                      RU
                    </span>{" "}
                    {word.russianSentence}
                  </div>
                )}

                {word.georgianSentence && (
                  <div className="bg-slate-800 p-4 rounded-xl">
                    <span className="text-green-400 font-bold">
                      GE
                    </span>{" "}
                    {word.georgianSentence}
                  </div>
                )}

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <button
                  onClick={() =>
                    speak(
                      word.english
                    )
                  }
                  className="bg-emerald-600 px-5 py-3 rounded-xl"
                >
                  🔊 Speak Word
                </button>

                <button
                  onClick={() =>
                    speak(
                      word.russian,
                      "ru-RU"
                    )
                  }
                  className="bg-indigo-700 px-5 py-3 rounded-xl"
                >
                  🔊 Speak RU Word
                </button>

                <button
                  onClick={() =>
                    speak(
                      word.sentence,
                      "en-US"
                    )
                  }
                  className="bg-cyan-600 px-5 py-3 rounded-xl"
                >
                  🔊 Speak EN Sentence
                </button>

                {word.russianSentence && (
                  <button
                    onClick={() =>
                      speak(
                        word.russianSentence,
                        "ru-RU"
                      )
                    }
                    className="bg-blue-700 px-5 py-3 rounded-xl"
                  >
                    🔊 Speak RU Sentence
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}