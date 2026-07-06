export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">

      <div className="bg-slate-900 rounded-3xl p-8">
        <div className="text-5xl">🔥</div>

        <h3 className="text-2xl font-bold mt-4">
          Streak
        </h3>

        <p className="text-5xl text-violet-400 mt-3">
          0
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8">
        <div className="text-5xl">⭐</div>

        <h3 className="text-2xl font-bold mt-4">
          XP
        </h3>

        <p className="text-5xl text-violet-400 mt-3">
          0
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8">
        <div className="text-5xl">📚</div>

        <h3 className="text-2xl font-bold mt-4">
          Learned Words
        </h3>

        <p className="text-5xl text-violet-400 mt-3">
          0
        </p>
      </div>

    </div>
  );
}