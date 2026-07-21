"use client";

import Link from "next/link";

type Props = {
  unit: {
    id: number;
    title: string;
    description: string;
    image: string;
    locked: boolean;
  };
};

export default function UnitCard({ unit }: Props) {
  return (
    <div
      className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        unit.locked
          ? "border-slate-700 bg-slate-800"
          : "border-violet-500 bg-slate-900"
      }`}
    >
      <div className="mb-5 text-6xl">
        {unit.image}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {unit.title}
      </h2>

      <p className="mt-3 text-slate-400">
        {unit.description || "Coming soon"}
      </p>

      {!unit.locked ? (
        <Link
          href={`/direct-method/unit/${unit.id}`}
          className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
        >
          ▶ Continue
        </Link>
      ) : (
        <div className="mt-6 inline-flex rounded-xl bg-slate-700 px-5 py-3 text-slate-400">
          🔒 Locked
        </div>
      )}
    </div>
  );
}