"use client";

import Layout from "@/app/components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import BackButton from "@/app/components/BackButton";

export default function UnitPage() {
  const { id } = useParams();

  const lessons = [
    {
      icon: "📖",
      title: "Vocabulary",
      description: "Learn all words from this unit.",
      href: `/direct-method-3/unit/${id}/vocabulary`,
    },
    {
      icon: "❓",
      title: "Questions",
      description: "Practice speaking with questions.",
      href: `/direct-method-3/unit/${id}/questions`,
    },
    {
      icon: "📚",
      title: "Grammar",
      description: "Study grammar explanations.",
      href: `/direct-method-3/unit/${id}/grammar`,
    },
    {
      icon: "✍️",
      title: "Exercises",
      description: "Complete exercises and earn XP.",
      href: `/direct-method-3/unit/${id}/exercises`,
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">

        <div className="rounded-3xl border border-violet-500 bg-slate-900 p-8 mb-8">

          <div className="mb-8">
            <BackButton
              href="/direct-method-3"
              label="Back to Direct Method 3"
            />
          </div>

          <div className="flex items-center gap-6">

            <div className="text-7xl">
              📘
            </div>

            <div>
              <h1 className="text-6xl font-bold text-white">
                Unit {id}
              </h1>

              <p className="mt-2 text-slate-400 text-lg">
                In this unit you will learn:
              </p>
            </div>

          </div>

          <ul className="mt-8 space-y-4 text-xl text-slate-300">
            <li>✅ New vocabulary words</li>
            <li>✅ Speaking questions</li>
            <li>✅ English grammar</li>
            <li>✅ Practical exercises</li>
          </ul>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {lessons.map((lesson) => (
            <Link
              key={lesson.title}
              href={lesson.href}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl"
            >

              <div className="text-5xl">
                {lesson.icon}
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white">
                {lesson.title}
              </h2>

              <p className="mt-3 text-slate-400">
                {lesson.description}
              </p>

              <div className="mt-6 font-semibold text-violet-400">
                Start →
              </div>

            </Link>
          ))}

        </div>

      </div>
    </Layout>
  );
}