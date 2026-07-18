"use client";

import Layout from "../components/Layout";
import { achievements } from "../data/achievements";
import { useApp } from "../context/AppContext";

export default function AchievementsPage() {
  const { isUnlocked } = useApp();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            🏆 Achievements
          </h1>

          <p className="mt-2 text-slate-400">
            Unlock achievements while improving your English.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => {
            const unlocked = isUnlocked(achievement.id);

            return (
              <div
                key={achievement.id}
                className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  unlocked
                    ? "border-emerald-500 bg-emerald-900/20"
                    : "border-slate-700 bg-slate-800"
                }`}
              >
                {/* Icon */}
                <div className="mb-5 text-6xl">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white">
                  {achievement.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-slate-400">
                  {achievement.description}
                </p>

                {/* Status */}
                <div
                  className={`mt-6 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
                    unlocked
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {unlocked ? "✅ Unlocked" : "🔒 Locked"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}