"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { allWords } from "../data";

export default function QuizPage() {
  const [score, setScore] = useState(0);

  const [randomWord, setRandomWord] =
    useState<any>(null);

  const [options, setOptions] =
    useState<string[]>([]);

  function generateQuestion() {
    const word =
      allWords[
        Math.floor(
          Math.random() *
            allWords.length
        )
      ];

    const answers = [
      word.georgian,

      ...allWords
        .filter(
          (w) =>
            w.georgian !==
            word.georgian
        )
        .sort(
          () =>
            Math.random() - 0.5
        )
        .slice(0, 3)
        .map(
          (w) => w.georgian
        ),
    ].sort(
      () =>
        Math.random() - 0.5
    );

    setRandomWord(word);
    setOptions(answers);
  }

  useEffect(() => {
    generateQuestion();
  }, []);

  function checkAnswer(
    answer: string
  ) {
    if (
      answer ===
      randomWord.georgian
    ) {
      alert("✅ Correct!");

      setScore(
        (prev) => prev + 1
      );
    } else {
      const wrongWords =
        JSON.parse(
          localStorage.getItem(
            "wrongWords"
          ) || "[]"
        );

      if (
        !wrongWords.includes(
          randomWord.english
        )
      ) {
        wrongWords.push(
          randomWord.english
        );

        localStorage.setItem(
          "wrongWords",
          JSON.stringify(
            wrongWords
          )
        );
      }

      alert(
        `❌ Wrong!\n\nCorrect Answer:\n${randomWord.georgian}`
      );
    }

    generateQuestion();
  }

  if (!randomWord) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-bold">
          Loading...
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <Link
        href="/flashcards"
        className="inline-block mb-8 bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl"
      >
        ← Back to Flashcards
      </Link>

      <h1 className="text-5xl font-bold mb-8">
        🎯 Quiz
      </h1>

      <div className="mb-8 text-2xl">
        🏆 Score: {score}
      </div>

      <div className="bg-slate-900 p-10 rounded-3xl max-w-4xl">

        <h2 className="text-6xl font-bold text-violet-300 mb-10">
          {randomWord.english}
        </h2>

        <div className="grid gap-4">

          {options.map(
            (option, i) => (
              <button
                key={`${option}-${i}`}
                onClick={() =>
                  checkAnswer(
                    option
                  )
                }
                className="bg-slate-800 hover:bg-violet-700 transition p-5 rounded-xl text-left text-2xl"
              >
                {option}
              </button>
            )
          )}

        </div>

      </div>

      <div className="mt-8">

        <Link
          href="/wrong"
          className="bg-red-600 hover:bg-red-500 px-5 py-3 rounded-xl"
        >
          ❌ Wrong Answers
        </Link>

      </div>

    </main>
  );
}