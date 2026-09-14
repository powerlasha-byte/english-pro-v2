import Link from "next/link";
import Layout from "@/app/components/Layout";
import { highImpactVerbs } from "@/app/data/englishInContext/highImpactVerbs";

export default function HighImpactVerbsPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl">
        <Link
          href="/english-in-context"
          className="mb-7 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:bg-slate-900 hover:text-white"
        >
          ← English in Context
        </Link>

        <header className="mb-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-violet-950/30 p-7 sm:p-9">
          <div className="mb-4 text-4xl">🔥</div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
            English Pro · Vocabulary & Usage
          </p>

          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            High-Impact Verbs
          </h1>

          <p className="mt-2 text-lg text-violet-300">
            მნიშვნელოვანი და ხშირად გამოყენებული ზმნები
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            აირჩიე ზმნა და შეისწავლე მისი მნიშვნელობები, გამოყენების
            ფორმები, მაგალითები და ხშირი შეცდომები.
          </p>
        </header>

        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-white">
            აირჩიე ზმნა
          </h2>

          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-400">
            {highImpactVerbs.length} ზმნა
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {highImpactVerbs.map((verb, index) => (
            <Link
              key={verb.id}
              href={`/english-in-context/high-impact-verbs/${verb.id}`}
              className="group"
            >
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-500/70 hover:bg-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Verb {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white transition group-hover:text-violet-300">
                      {verb.title}
                    </h3>

                    <p className="mt-1 text-sm text-violet-300">
                      {verb.georgianTitle}
                    </p>
                  </div>

                  <span className="rounded-xl bg-violet-500/10 px-3 py-2 text-lg text-violet-300 transition group-hover:bg-violet-500/20">
                    →
                  </span>
                </div>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
                  {verb.introduction}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                    {verb.patterns.length} გამოყენების ფორმა
                  </span>

                  {verb.collocations?.length > 0 && (
                    <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                      Collocations
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}