"use client";

import useFavorites from "../english-practice/useFavorites";
import useXP from "../english-practice/useXP";

export default function PremiumHeader() {
  const { favorites } = useFavorites();
  const { xp } = useXP();

  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  return (
    <div className="space-y-5">

      {/* Title */}

      <div>
        <h1 className="text-4xl font-bold text-white">
          English Practice
        </h1>

        <p className="mt-2 text-slate-400">
          Practice real business conversations.
        </p>
      </div>

      {/* Premium Card */}

      <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5">

        {/* Top Row */}

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div className="flex items-center gap-8">

            <div>
              <p className="text-xs uppercase text-slate-500">
                Favorites
              </p>

              <p className="mt-1 text-lg font-bold">
                ⭐ {favorites.length}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                Streak
              </p>

              <p className="mt-1 text-lg font-bold">
                🔥 8
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                XP
              </p>

              <p className="mt-1 text-lg font-bold">
                ⚡ {xp}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                Level
              </p>

              <p className="mt-1 text-lg font-bold text-violet-400">
                🏆 {level}
              </p>
            </div>

          </div>

          <div className="text-right">

            <p className="text-sm text-slate-400">
              Level {level}
            </p>

            <p className="text-xs text-slate-500">
              {progress} / 100 XP
            </p>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">

            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-500
                to-pink-500
                transition-all
                duration-700
              "
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}