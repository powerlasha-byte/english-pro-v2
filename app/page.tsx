import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
          <h1 className="text-3xl font-bold text-violet-400">
            📚 English Pro
          </h1>

          <p className="text-slate-400 mt-2">
            by Lasha 🚀
          </p>

          <nav className="mt-10 space-y-3">
            <button className="w-full text-left p-3 rounded-xl bg-violet-600">
              🏠 Dashboard
            </button>

            <Link
  href="/flashcards"
  className="block w-full text-left p-3 rounded-xl hover:bg-slate-800"
>
  📚 Flashcards
</Link>
            <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
              💼 BI English
            </button>

            <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
              🇷🇺 Russian
            </button>

            <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
              🎙️ Speaking
            </button>

            <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
              📊 Statistics
            </button>

            <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800">
              ⭐ Favorites
            </button>
          </nav>
        </aside>

        {/* Main */}
        <section className="flex-1 p-10">

          <h2 className="text-5xl font-bold">
            Welcome, Lasha 👋
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Your personal English + Russian platform for BI Analysts.
          </p>

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

          <div className="mt-12 bg-slate-900 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Word of the Day 🔊
            </h3>

            <h1 className="text-6xl font-bold text-violet-400 mt-8">
              Investigate
            </h1>

            <p className="mt-6 text-2xl">
              🇬🇪 მოკვლევა
            </p>

            <p className="mt-2 text-2xl">
              🇷🇺 расследовать
            </p>

            <p className="mt-8 text-slate-400 text-xl">
              We need to investigate why the report refresh failed.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}