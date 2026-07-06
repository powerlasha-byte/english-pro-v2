import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-3xl font-bold text-violet-400">
        📚 English Pro
      </h1>

      <p className="text-slate-400 mt-2">
        by Lasha 🚀
      </p>

      <nav className="mt-10 space-y-3">

        <Link
          href="/"
          className="block w-full text-left p-3 rounded-xl bg-violet-600"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/flashcards"
          className="block w-full text-left p-3 rounded-xl hover:bg-slate-800"
        >
          📚 Flashcards
        </Link>

        <Link
          href="/english-practice"
          className="block w-full text-left p-3 rounded-xl hover:bg-slate-800"
        >
          💬 English Practice
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
  );
}