import Link from "next/link";
import Layout from "@/app/components/Layout";
import { categories } from "@/app/data/englishInContext/categories";

export default function EnglishInContextPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
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
                <div className="text-4xl">{category.icon}</div>

                <h2 className="mt-5 text-xl font-bold text-white group-hover:text-violet-400">
                  {category.title}
                </h2>

                <p className="mt-1 text-sm text-violet-400">
                  {category.georgianTitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {category.description}
                </p>

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