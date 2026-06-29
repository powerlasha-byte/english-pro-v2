"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { allWords } from "../data";

export default function WrongPage() {
  const [wrongWords, setWrongWords] =
    useState<any[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("wrongWords");

    if (!saved) return;

    const wrongNames =
      JSON.parse(saved);

    const fullWords =
      allWords.filter((w) =>
        wrongNames.includes(
          w.english
        )
      );

    setWrongWords(fullWords);
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
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <Link
        href="/flashcards"
        className="bg-slate-800 px-5 py-3 rounded-xl inline-block mb-8"
      >
        ← Back to Flashcards
      </Link>

      <h1 className="text-5xl font-bold mb-10">
        ❌ Wrong Answers
      </h1>

      {wrongWords.length === 0 ? (
        <p className="text-slate-400 text-xl">
          🎉 No wrong answers
        </p>
      ) : (
        <div className="space-y-8">

          {wrongWords.map(
  (word, index) => (
              <div
                   key={`${word.english}-${index}`}

                className="bg-slate-900 rounded-3xl p-8"
              >
                <h2 className="text-5xl font-bold text-violet-300 mb-6">
                  {word.english}
                </h2>

                <div className="space-y-3">

                  <div className="bg-slate-800 p-4 rounded-xl">
                    <span className="text-green-400 font-bold">
                      
                    </span>{" "}
                    {
                      word.georgian
                    }
                  </div>

                  <div className="bg-slate-800 p-4 rounded-xl">
                    <span className="text-cyan-400 font-bold">
                     
                    </span>{" "}
                    {
                      word.russian
                    }
                  </div>

                  <div className="bg-slate-800 p-4 rounded-xl">
                    <span className="text-yellow-400 font-bold">
                      
                    </span>{" "}
                    {
                      word.sentence
                    }
                  </div>

                  {word.russianSentence && (
                    <div className="bg-slate-800 p-4 rounded-xl">
                      <span className="text-yellow-400 font-bold">
                        
                      </span>{" "}
                      {
                        word.russianSentence
                      }
                    </div>
                  )}

                  {word.georgianSentence && (
                    <div className="bg-slate-800 p-4 rounded-xl">
                      <span className="text-yellow-400 font-bold">
                       
                      </span>{" "}
                      {
                        word.georgianSentence
                      }
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
                    className="bg-violet-600 px-5 py-3 rounded-xl"
                  >
                    🔊 Speak Word
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
                    🔊 Speak EN
                  </button>

{word.russian && (
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
)}




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
                      🔊 Speak RU
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </main>
  );
}