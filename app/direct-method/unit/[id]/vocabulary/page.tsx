"use client";

import { useParams } from "next/navigation";

import Layout from "@/app/components/Layout";
import BackButton from "@/app/components/BackButton";
import { speak } from "@/app/lib/speak";
import { getUnitData } from "@/app/lib/directMethod";

export default function VocabularyPage() {
  const { id } = useParams();

  const { vocabulary } = getUnitData(id as string);

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
          📖 Unit {id} Vocabulary
        </h1>

        <div className="grid gap-5">
          {vocabulary.map((word) => (
            <div
              key={word.id}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-violet-400">
                  {word.english}
                </h2>

                <button
                  onClick={() => speak(word.english)}
                  className="rounded-xl bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-500"
                >
                  🔊
                </button>
              </div>

              <p className="mt-2 text-xl text-white">
                {word.georgian}
              </p>

              <p className="mt-2 text-slate-400">
                {word.pronunciation}
              </p>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg text-white">
                    {word.sentence}
                  </p>

                  <p className="mt-2 text-slate-400">
                    {word.georgianSentence}
                  </p>
                </div>

                <button
                  onClick={() => speak(word.sentence)}
                  className="rounded-xl bg-slate-700 px-4 py-2 text-white transition hover:bg-slate-600"
                >
                  🔊
                </button>
              </div>

              <p className="mt-5 text-sm text-violet-400">
                Page {word.page}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}