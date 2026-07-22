"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { getUnitData } from "@/app/lib/directMethod";

export default function ExercisesPage() {
  const { id } = useParams();

  const { exercises } = getUnitData(id as string);

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const exercise = exercises[current];

  const next = () => {
    if (current < exercises.length - 1) {
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
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-6">
          <BackButton
            href={`/direct-method/unit/${id}`}
            label="Back to Unit"
          />
        </div>

        <div className="rounded-3xl border border-violet-500 bg-slate-900 p-8">
          <p className="text-violet-400 font-semibold">
            Exercise {current + 1} / {exercises.length}
          </p>

          {/* Main Title */}
          <h1 className="mt-3 text-5xl font-bold text-white">
            ✍️ Complete the sentence:
          </h1>

          {/* Exercise */}
          <div className="mt-10 rounded-2xl bg-slate-800 p-8">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <p className="text-3xl font-bold text-white">
                  {exercise.sentence}
                </p>
              </div>

              <button
                onClick={() => speak(exercise.sentence)}
                className="rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
              >
                🔊
              </button>
            </div>
          </div>

          {/* Show Answer */}
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="mt-8 rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-600"
          >
            {showAnswer ? "🙈 Hide Answer" : "👁 Show Answer"}
          </button>

          {/* Answer */}
          {showAnswer && (
            <div className="mt-8 rounded-2xl bg-slate-800 p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-violet-400">
                    {exercise.answer}
                  </h2>

                  {exercise.explanation && (
                    <p className="mt-5 text-lg text-slate-300">
                      {exercise.explanation}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => speak(exercise.answer)}
                  className="rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-500"
                >
                  🔊
                </button>
              </div>
            </div>
          )}

          {/* Progress */}
          <div className="mt-10">
            <div className="h-3 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full bg-violet-500 transition-all"
                style={{
                  width: `${((current + 1) / exercises.length) * 100}%`,
                }}
              />
            </div>

            <p className="mt-3 text-slate-400">
              {current + 1} / {exercises.length}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex justify-between">
            <button
              disabled={current === 0}
              onClick={previous}
              className="rounded-xl bg-slate-700 px-6 py-3 text-white transition disabled:opacity-40"
            >
              ← Previous
            </button>

            <button
              disabled={current === exercises.length - 1}
              onClick={next}
              className="rounded-xl bg-violet-600 px-6 py-3 text-white transition hover:bg-violet-500 disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}