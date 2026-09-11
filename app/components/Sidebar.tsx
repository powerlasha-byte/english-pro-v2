import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-violet-400">
        📚 English Pro
      </h1>

      <p className="mt-2 text-slate-400">
        by Lasha 🚀
      </p>

      <nav className="mt-10 space-y-3">

        <Link
          href="/"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/flashcards"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          📚 Flashcards
        </Link>

        <Link
          href="/english-practice"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          💬 English Practice
        </Link>

        <Link
          href="/favorites"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          ⭐ Favorite Sentences
        </Link>

        <Link
          href="/bi-english"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          💼 BI English
        </Link>

        <Link
          href="/russian"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          🇷🇺 Russian
        </Link>

        <Link
          href="/speaking"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          🎙 Speaking
        </Link>

        <Link
          href="/statistics"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          📊 Statistics
        </Link>

        {/* Direct Method */}
        <div className="space-y-2">

          <div className="block w-full rounded-xl p-3 text-slate-200">
            📚 Direct Method
          </div>

          <div className="ml-4 space-y-2">

            <Link
              href="/direct-method"
              className="block w-full rounded-xl p-3 hover:bg-slate-800"
            >
              📘 Direct Method 4
            </Link>

            <Link
              href="/direct-method-3"
              className="block w-full rounded-xl p-3 hover:bg-slate-800"
            >
              📗 Direct Method 3
            </Link>

          </div>
        </div>

        {/* English in Context */}
        <div className="space-y-2">

          <div className="block w-full rounded-xl p-3 text-slate-200">
            🧠 English in Context
          </div>

          <div className="ml-4 space-y-2">

            <Link
              href="/english-in-context"
              className="block w-full rounded-xl p-3 hover:bg-slate-800"
            >
              📘 Context Library
            </Link>

          </div>
        </div>

        <Link
          href="/achievements"
          className="block w-full rounded-xl p-3 hover:bg-slate-800"
        >
          🏆 Achievements
        </Link>

      </nav>
    </aside>
  );
}