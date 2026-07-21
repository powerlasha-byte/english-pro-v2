"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { getUnitData } from "@/app/lib/directMethod";

export default function QuestionsPage() {
  const { id } = useParams();

  const { questions } = getUnitData(id as string);

  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-8">

        <div className="mb-6">
          <BackButton
            href={`/direct-method/unit/${id}`}
            label="Back to Unit"
          />
        </div>

        <h1 className="mb-8 text-4xl font-bold text-white">
          ❓ Unit {id} Questions
        </h1>

        <div className="grid gap-5">
          {questions.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <div className="flex items-start justify-between gap-4">

                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-violet-400">
                    {item.question}
                  </h2>

                  {"georgianQuestion" in item && (
                    <p className="mt-2 text-slate-400">
                      {item.georgianQuestion}
                    </p>
                  )}

                </div>

                <button
                  onClick={() => speak(item.question)}
                  className="rounded-xl bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-500"
                >
                  🔊
                </button>

              </div>

              <button
                onClick={() =>
                  setShowAnswer(
                    showAnswer === item.id ? null : item.id
                  )
                }
                className="mt-6 rounded-xl bg-slate-700 px-5 py-3 text-white transition hover:bg-slate-600"
              >
                {showAnswer === item.id
                  ? "🙈 Hide Answer"
                  : "👁 Show Answer"}
              </button>

              {showAnswer === item.id && (
                <>
                  <hr className="my-6 border-slate-700" />

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex-1">

                      <p className="text-lg text-white">
                        {item.answer}
                      </p>

                      {"georgianAnswer" in item && (
                        <p className="mt-2 text-slate-400">
                          {item.georgianAnswer}
                        </p>
                      )}

                    </div>

                    <button
                      onClick={() => speak(item.answer)}
                      className="rounded-xl bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
                    >
                      🔊
                    </button>

                  </div>
                </>
              )}

              {"page" in item && (
                <p className="mt-6 text-sm text-violet-400">
                  Page {item.page}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}