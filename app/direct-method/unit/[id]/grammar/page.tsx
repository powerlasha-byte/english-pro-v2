"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { getUnitData } from "@/app/lib/directMethod";

export default function GrammarPage() {
  const { id } = useParams();

  const { grammar } = getUnitData(id as string);

  const [current, setCurrent] = useState(0);
  const [showGeorgian, setShowGeorgian] = useState(false);

  const lesson = grammar[current];

  if (!lesson) return null;

  const nextLesson = () => {
    if (current < grammar.length - 1) {
      setCurrent((prev) => prev + 1);
      setShowGeorgian(false);
    }
  };

  const previousLesson = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setShowGeorgian(false);
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

          <div className="flex items-center justify-between">

            <div>

              <p className="text-violet-400 font-semibold">
                Lesson {current + 1} / {grammar.length}
              </p>

              <h1 className="mt-2 text-5xl font-bold text-white">
                {lesson.title}
              </h1>

              {showGeorgian && (
                <p className="mt-2 text-2xl text-violet-400">
                  {lesson.georgianTitle}
                </p>
              )}

            </div>

            <button
              onClick={() => speak(lesson.title)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-white hover:bg-violet-500 transition"
            >
              🔊 Listen
            </button>

          </div>

          <hr className="my-8 border-slate-700" />

          <h2 className="text-3xl font-bold text-white">
            Rule
          </h2>

          <p className="mt-4 text-xl text-white">
            {lesson.rule}
          </p>

          {showGeorgian && (
            <p className="mt-4 text-lg text-slate-300">
              {lesson.georgianRule}
            </p>
          )}

          <div className="mt-6 flex gap-4">

            <button
              onClick={() => speak(lesson.rule)}
              className="rounded-xl bg-violet-600 px-5 py-3 text-white hover:bg-violet-500 transition"
            >
              🔊 Listen Rule
            </button>

            <button
              onClick={() => setShowGeorgian(!showGeorgian)}
              className="rounded-xl bg-slate-700 px-5 py-3 text-white hover:bg-slate-600 transition"
            >
              {showGeorgian
                ? "🙈 Hide Georgian"
                : "👁 Show Georgian"}
            </button>

          </div>

          <hr className="my-8 border-slate-700" />

          <h2 className="mb-6 text-3xl font-bold text-white">
            Examples
          </h2>

          <div className="space-y-6">

            {lesson.examples.map((example, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-800 p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-lg text-white">
                      {example.english}
                    </p>

                    {showGeorgian && (
                      <p className="mt-2 text-slate-400">
                        {example.georgian}
                      </p>
                    )}

                  </div>

                  <button
                    onClick={() => speak(example.english)}
                    className="rounded-xl bg-slate-700 px-4 py-2 text-white hover:bg-slate-600 transition"
                  >
                    🔊
                  </button>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-10">

            <div className="h-3 overflow-hidden rounded-full bg-slate-700">

              <div
                className="h-full bg-violet-500 transition-all"
                style={{
                  width: `${((current + 1) / grammar.length) * 100}%`,
                }}
              />

            </div>

            <p className="mt-3 text-slate-400">
              {current + 1} / {grammar.length}
            </p>

          </div>

          <div className="mt-10 flex justify-between">

            <button
              onClick={previousLesson}
              disabled={current === 0}
              className="rounded-xl bg-slate-700 px-6 py-3 text-white disabled:opacity-40"
            >
              ← Previous
            </button>

            <button
              onClick={nextLesson}
              disabled={current === grammar.length - 1}
              className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500 disabled:opacity-40"
            >
              Next →
            </button>

          </div>

        </div>

      </div>
    </Layout>
  );
}