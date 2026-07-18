"use client";

import Layout from "../components/Layout";
import { achievements } from "../data/achievements";
import { useApp } from "../context/AppContext";

export default function AchievementsPage() {
  const { isUnlocked } = useApp();

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          🏆 Achievements
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement) => {
            const unlocked = isUnlocked(achievement.id);

            return (
              <div
                key={achievement.id}
                className={`rounded-xl border p-5 transition ${
                  unlocked
                    ? "bg-green-50 border-green-400"
                    : "bg-gray-100 border-gray-300 opacity-70"
                }`}
              >
                <div className="text-5xl mb-3">
                  {achievement.icon}
                </div>

                <h2 className="font-bold text-lg">
                  {achievement.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  {achievement.description}
                </p>

                <div className="mt-4 font-semibold">
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