"use client";

import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

type PracticeCardProps = {
  english: string;
  georgian: string;
  favorite: boolean;
  onFavorite: () => void;
};

export default function PracticeCard({
  english,
  georgian,
  favorite,
  onFavorite,
}: PracticeCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();

    const utterance = new SpeechSynthesisUtterance(english);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      onClick={() => setShowTranslation(!showTranslation)}
      className="
        cursor-pointer
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:border-violet-500
        hover:shadow-violet-900/20
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            🇬🇧 English
          </p>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
        >
          <FavoriteButton
            active={favorite}
            onClick={onFavorite}
          />
        </div>

      </div>

      {/* English Sentence */}

      <h2 className="mt-6 text-3xl font-bold leading-relaxed text-white">
        {english}
      </h2>

      {!showTranslation && (
        <p className="mt-6 text-center text-sm text-slate-500">
          👆 Click anywhere on the card to reveal translation
        </p>
      )}

      {showTranslation && (
        <>
          <div className="my-8 h-px bg-slate-700" />

          <div className="rounded-2xl bg-slate-800 p-6">

            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              🇬🇪 Georgian
            </p>

            <p className="mt-4 text-2xl leading-relaxed text-violet-300">
              {georgian}
            </p>

          </div>
        </>
      )}

      <div
        className="mt-8 flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={speak}
          className="
            rounded-xl
            bg-violet-600
            px-6
            py-3
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:bg-violet-500
            active:scale-95
          "
        >
          🔊 Listen
        </button>
      </div>
    </div>
  );
}