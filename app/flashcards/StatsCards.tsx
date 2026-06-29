type Props = {
  streak: number;
  xp: number;
  learned: number;
  level: string;
};

export default function StatsCards({
  streak,
  xp,
  learned,
  level,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-10">

      <div className="bg-slate-900 rounded-3xl p-6">
        <p className="text-slate-400">
          🔥 Streak
        </p>

        <h2 className="text-5xl font-bold text-violet-400 mt-4">
          {streak}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6">
        <p className="text-slate-400">
          ⭐ XP
        </p>

        <h2 className="text-5xl font-bold text-violet-400 mt-4">
          {xp}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6">
        <p className="text-slate-400">
          📚 Learned
        </p>

        <h2 className="text-5xl font-bold text-violet-400 mt-4">
          {learned}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-3xl p-6">
        <p className="text-slate-400">
          🏆 Level
        </p>

        <h2 className="text-lg font-bold text-violet-400 mt-6">
          {level}
        </h2>
      </div>

    </div>
  );
}