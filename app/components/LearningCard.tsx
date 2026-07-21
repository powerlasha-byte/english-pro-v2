"use client";

import { speak } from "@/app/lib/speak";

type LearningCardProps = {
  title: string;
  subtitle: string;
  speakText: string;

  showSubtitle: boolean;
  onToggleSubtitle: () => void;

  hiddenText: string;

  revealButtonText: string;
  hideButtonText: string;

  progress: number;
  total: number;
};

export default function LearningCard({
  title,
  subtitle,
  speakText,
  showSubtitle,
  onToggleSubtitle,
  hiddenText,
  revealButtonText,
  hideButtonText,
  progress,
  total,
}: LearningCardProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold text-white">
          {title}
        </h2>

        <button
          onClick={() => speak(speakText)}
          className="rounded-xl bg-violet-600 px-5 py-3 text-white hover:bg-violet-500 transition"
        >
          🔊 Listen
        </button>
      </div>

      {showSubtitle ? (
        <p className="mt-8 text-3xl text-violet-400">
          {subtitle}
        </p>
      ) : (
        <p className="mt-8 text-2xl text-slate-500">
          {hiddenText}
        </p>
      )}

      <button
        onClick={onToggleSubtitle}
        className="mt-6 rounded-xl bg-slate-700 px-5 py-3 text-white hover:bg-slate-600 transition"
      >
        {showSubtitle ? hideButtonText : revealButtonText}
      </button>

      <div className="mt-10">
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full bg-violet-500 transition-all"
            style={{
              width: `${(progress / total) * 100}%`,
            }}
          />
        </div>

        <p className="mt-3 text-slate-400">
          {progress} / {total}
        </p>
      </div>
    </div>
  );
}