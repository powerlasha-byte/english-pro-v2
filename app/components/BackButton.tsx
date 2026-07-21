"use client";

import Link from "next/link";

type BackButtonProps = {
  href: string;
  label: string;
};

export default function BackButton({
  href,
  label,
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 hover:border-violet-500"
    >
      ← {label}
    </Link>
  );
}