import Link from "next/link";
import Layout from "@/app/components/Layout";

const categories = [
  {
    id: "high-impact-verbs",
    icon: "🔥",
    title: "High-Impact Verbs",
    georgianTitle: "მნიშვნელოვანი და ხშირად გამოყენებული ზმნები",
    description:
      "Learn how common verbs like make, get, take, have and do work in real English.",
  },
  {
    id: "grammar-in-context",
    icon: "🧠",
    title: "Grammar in Context",
    georgianTitle: "გრამატიკა რეალურ კონტექსტში",
    description:
      "Understand grammar through practical examples and natural English.",
  },
  {
    id: "spoken-english",
    icon: "🗣️",
    title: "Spoken English",
    georgianTitle: "სასაუბრო ინგლისური",
    description:
      "Learn natural expressions, conversation patterns and everyday phrases.",
  },
  {
    id: "phrasal-verbs",
    icon: "🔗",
    title: "Phrasal Verbs",
    georgianTitle: "ფრაზული ზმნები",
    description:
      "Master common phrasal verbs and understand how they are used in context.",
  },
  {
    id: "word-patterns",
    icon: "🧩",
    title: "Word Patterns & Collocations",
    georgianTitle: "სიტყვების კომბინაციები",
    description:
      "Learn which words naturally go together and avoid unnatural combinations.",
  },
  {
    id: "meaning-changes",
    icon: "⚡",
    title: "Meaning Changes",
    georgianTitle: "მნიშვნელობის ცვლილება კონტექსტის მიხედვით",
    description:
      "See how the meaning of a word changes depending on the context.",
  },
  {
    id: "advanced-structures",
    icon: "🎯",
    title: "Advanced Structures",
    georgianTitle: "რთული გრამატიკული სტრუქტურები",
    description:
      "Learn advanced structures that make your English more natural and precise.",
  },
  {
    id: "sentence-building",
    icon: "🧱",
    title: "Sentence Building",
    georgianTitle: "წინადადების აგება",
    description:
      "Learn how to build longer, clearer and more natural English sentences.",
  },
];

export default function EnglishInContextPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            🧠 English in Context
          </h1>

          <p className="mt-3 text-lg text-slate-400">
            Learn how English is actually used in real conversations,
            sentences and everyday situations.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/english-in-context/${category.id}`}
              className="group"
            >
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-violet-500 hover:bg-slate-800">

                {/* Icon */}
                <div className="text-4xl">
                  {category.icon}
                </div>

                {/* Title */}
                <h2 className="mt-5 text-xl font-bold text-white group-hover:text-violet-400">
                  {category.title}
                </h2>

                {/* Georgian title */}
                <p className="mt-1 text-sm text-violet-400">
                  {category.georgianTitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {category.description}
                </p>

                {/* Button */}
                <div className="mt-6 text-sm font-semibold text-slate-300 group-hover:text-white">
                  Explore →
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </Layout>
  );
}