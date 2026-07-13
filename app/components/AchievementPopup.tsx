"use client";

type Props = {
  show: boolean;
  title: string;
  reward: string;
};

export default function AchievementPopup({
  show,
  title,
  reward,
}: Props) {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="w-80 rounded-3xl border border-violet-500 bg-slate-900 p-6 shadow-2xl shadow-violet-900/40">

        <div className="flex items-center gap-4">
          <div className="text-4xl">🏆</div>

          <div>
            <p className="text-xs uppercase tracking-widest text-violet-400">
              Achievement Unlocked
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              {title}
            </h2>
          </div>
        </div>

        <p className="mt-4 font-semibold text-emerald-400">
          {reward}
        </p>

      </div>
    </div>
  );
}