


type Props = {
  current: any;
  showTranslation: boolean;
  setShowTranslation: (
    value: boolean
  ) => void;
  speak: (
    text: string
  ) => void;
  markLearned: () => void;
  toggleFavorite: () => void;
  nextWord: () => void;
  favoritesCount: number;
  isFavorite: boolean;
};

export default function Flashcard({
  current,
  showTranslation,
  setShowTranslation,
  speak,
  markLearned,
  toggleFavorite,
  nextWord,
  favoritesCount,
  isFavorite,
}: Props) {
  if (!current) {
    return (
      <div className="bg-slate-900 rounded-3xl p-20 text-center">
        <h2 className="text-4xl text-slate-400">
          😢 No words found
        </h2>

        <p className="text-slate-500 mt-4">
          Try another search.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-10 max-w-5xl">

      <h2 className="text-6xl font-bold text-violet-300">
        {current.english}
      </h2>

      <div className="flex gap-3 mt-4 flex-wrap">

        <span className="bg-violet-700 px-3 py-1 rounded-full text-sm">
          📂 {current.category}
        </span>

        <span className="bg-cyan-700 px-3 py-1 rounded-full text-sm">
          📈 {current.difficulty}
        </span>

      </div>

      {showTranslation && (
        <div className="mt-8 space-y-4">

          <p className="text-2xl">
            🇬🇪 {current.georgian}
          </p>

          <p className="text-2xl">
            🇷🇺 {current.russian}
          </p>

<p className="text-xl text-slate-300">
  🇷🇺 {current.russianSentence}
</p>

<p className="text-xl text-slate-300">
  🇬🇪 {current.georgianSentence}
</p>


         <div className="mt-8 space-y-4">


   <div className="mt-8 space-y-4">
  <p className="text-xl text-slate-300">
    🇬🇧 {current.sentence}

  </p>
<p className="text-red-400">
  RU TEST: {String(current.russianSentence)}
</p>

<p className="text-green-400">
  GE TEST: {String(current.georgianSentence)}
</p>

  <pre className="text-xs text-red-400 mt-4">
  {JSON.stringify(current, null, 2)}
</pre>

  {current.russianSentence && (
    <p className="text-xl text-slate-300">
      🇷🇺 {current.russianSentence}
    </p>
  )}

  {current.georgianSentence && (
    <p className="text-xl text-slate-300">
      🇬🇪 {current.georgianSentence}
    </p>
  )}
</div>



  {current.russianSentence && (
    <p className="text-xl text-slate-300">
      🇷🇺 {current.russianSentence}
    </p>
  )}

  {current.georgianSentence && (
    <p className="text-xl text-slate-300">
      🇬🇪 {current.georgianSentence}
    </p>
  )}
</div>

        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-10">

        <button
          onClick={() =>
            setShowTranslation(true)
          }
          className="bg-violet-600 px-6 py-3 rounded-xl"
        >
          Show Translation
        </button>

        <button
          onClick={() =>
            speak(
              current.english
            )
          }
          className="bg-emerald-600 px-6 py-3 rounded-xl"
        >
          🔊 Speak Word
        </button>

        <button
          onClick={() =>
            speak(
              current.sentence
            )
          }
          className="bg-cyan-600 px-6 py-3 rounded-xl"
        >
          🔊 Speak Sentence
        </button>

        <button
          onClick={
            markLearned
          }
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          ✅ Mark Learned
        </button>

        <button
          onClick={
            toggleFavorite
          }
          className="bg-yellow-600 px-6 py-3 rounded-xl"
        >
          {isFavorite
            ? "⭐ Favorited"
            : "⭐ Favorite"}
        </button>

        <button
          onClick={nextWord}
          className="bg-slate-700 px-6 py-3 rounded-xl"
        >
          Next Word ➡️
        </button>

      </div>

      <p className="text-slate-400 mt-8">
        ⭐ Favorites:
        {" "}
        {favoritesCount}
      </p>

    </div>
  );
}