"use client";

import { useState } from "react";

type PracticeCardProps = {
  english: string;
  georgian: string;
};

export default function PracticeCard({
  english,
  georgian,
}: PracticeCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(english);

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      {/* English */}
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        🇬🇧 English
      </p>

      <h2 className="mt-4 text-2xl font-bold leading-snug text-white">
        {english}
      </h2>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3">

        <button
          onClick={speak}
          className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-500"
        >
          🔊 Listen
        </button>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="rounded-xl border border-violet-500 px-5 py-2.5 text-sm font-medium text-violet-300 transition hover:bg-violet-600 hover:text-white"
        >
          {showTranslation ? "🙈 Hide Translation" : "👁 Show Translation"}
        </button>

        <button
          className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-800"
        >
          ⭐ Favorite
        </button>

      </div>

      <div className="my-6 h-px bg-slate-700" />

      {/* Translation */}
      {showTranslation && (
        <div className="rounded-2xl bg-slate-800 p-5">

          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            🇬🇪 Georgian
          </p>

          <p className="mt-3 text-xl font-medium leading-relaxed text-violet-300">
            {georgian}
          </p>

        </div>
      )}
    </div>
  );
}