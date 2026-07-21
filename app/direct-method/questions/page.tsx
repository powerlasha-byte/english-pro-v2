"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import Layout from "@/app/components/Layout";
import { getUnitData } from "@/app/lib/directMethod";
import { speak } from "@/app/lib/speak";

export default function QuestionsPage() {
  const { id } = useParams();

  const { questions } = getUnitData(id as string);

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const item = questions[current];

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const previous = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">

        <h1 className="mb-8 text-4xl font-bold text-white">
          ❓ Questions
        </h1>

        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">

          <div className="flex items-center justify-between">

            <h2 className="text-4xl font-bold text-white">
              {item.question}
            </h2>

            <button
              onClick={() => speak(item.question)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
            >
              🔊 Listen
            </button>

          </div>

          {showAnswer ? (
            <div className="mt-8">

              <p className="text-3xl text-green-400">
                {item.answer}
              </p>

              {"georgianAnswer" in item && (
                <p className="mt-3 text-slate-400">
                  {item.georgianAnswer}
                </p>
              )}

              <button
                onClick={() => speak(item.answer)}
                className="mt-5 rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-500"
              >
                🔊 Listen Answer
              </button>

            </div>
          ) : (
            <p className="mt-8 text-2xl text-slate-500">
              Think before revealing the answer...
            </p>
          )}

          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="mt-6 rounded-xl bg-slate-700 px-5 py-3 text-white transition hover:bg-slate-600"
          >
            {showAnswer ? "🙈 Hide Answer" : "👁 Show Answer"}
          </button>

          <div className="mt-10">
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-violet-500 transition-all"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            <p className="mt-3 text-slate-400">
              {current + 1} / {questions.length}
            </p>
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={previous}
            disabled={current === 0}
            className="flex-1 rounded-2xl bg-slate-700 py-4 text-xl font-semibold text-white hover:bg-slate-600 disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={next}
            disabled={current === questions.length - 1}
            className="flex-1 rounded-2xl bg-emerald-600 py-4 text-xl font-semibold text-white hover:bg-emerald-500 disabled:bg-slate-700"
          >
            Next →
          </button>

        </div>

      </div>
    </Layout>
  );
}