"use client";

import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export default function DirectMethodCard({
  title,
  description,
  icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl"
    >
      <div className="mb-5 text-6xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

      <div className="mt-6 inline-flex items-center rounded-xl bg-violet-600 px-5 py-3 text-white transition group-hover:bg-violet-500">
        Open →
      </div>
    </Link>
  );
}