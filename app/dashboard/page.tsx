"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLogout } from "@/app/hooks/useLogout";

export default function DashboardPage() {
  const { handleLogout } = useLogout();
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [learned, setLearned] = useState(0);
  const [favorites, setFavorites] = useState(0);

  useEffect(() => {
    const savedXp = localStorage.getItem("xp");
    const savedStreak = localStorage.getItem("streak");
    const savedLearned = localStorage.getItem("learned");
    const savedFavorites = localStorage.getItem("favorites");

    if (savedXp) setXp(Number(savedXp));
    if (savedStreak) setStreak(Number(savedStreak));
    if (savedLearned) setLearned(Number(savedLearned));

    if (savedFavorites) {
      const favs = JSON.parse(savedFavorites);
      setFavorites(favs.length);
    }
  }, []);

  const level = useMemo(() => {
    if (xp >= 1000) return "👑 English Pro";
    if (xp >= 600) return "🚀 Data Expert";
    if (xp >= 300) return "💼 Senior BI Analyst";
    if (xp >= 100) return "⭐ BI Analyst";
    return "🌱 Beginner";
  }, [xp]);

  const dailyGoal = 20;

  const progress = Math.min(
    (learned / dailyGoal) * 100,
    100
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      {/* Back Button */}
       

<div className="mb-8 flex justify-between items-center">
  <Link
    href="/"
    className="bg-slate-800 px-5 py-3 rounded-xl hover:bg-slate-700 transition"
  >
    ← Home
  </Link>

  <button
    onClick={handleLogout}
    className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition"
  >
    🚪 Logout
  </button>
</div>


      {/* Title */}
      <h1 className="text-5xl font-bold text-violet-400 mb-12">
        🏠 Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-3xl p-8">
          <p className="text-slate-400">🔥 Streak</p>

          <h2 className="text-5xl text-violet-400 font-bold mt-4">
            {streak}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8">
          <p className="text-slate-400">⭐ XP</p>

          <h2 className="text-5xl text-violet-400 font-bold mt-4">
            {xp}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8">
          <p className="text-slate-400">
            📚 Learned Words
          </p>

          <h2 className="text-5xl text-violet-400 font-bold mt-4">
            {learned}
          </h2>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8">
          <p className="text-slate-400">
            ⭐ Favorites
          </p>

          <h2 className="text-5xl text-violet-400 font-bold mt-4">
            {favorites}
          </h2>
        </div>

      </div>

      {/* Level */}
      <div className="bg-slate-900 rounded-3xl p-10 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          🏆 Current Level
        </h2>

        <p className="text-5xl text-violet-400 font-bold">
          {level}
        </p>

      </div>

      {/* Daily Goal */}
      <div className="bg-slate-900 rounded-3xl p-10 mt-10">

        <h2 className="text-3xl font-bold mb-6">
          🎯 Daily Goal
        </h2>

        <p className="text-slate-400 mb-5">
          Learn {dailyGoal} words today
        </p>

        <div className="w-full h-5 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-5 text-violet-300 text-xl">
          {learned} / {dailyGoal} words
        </p>

      </div>

    </main>
  );
}