"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allWords } from "../data";
import { categories } from "../data/categories";

export default function FlashcardsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");
  const [favoritesOnly, setFavoritesOnly] =
    useState(false);

  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] =
    useState(false);

  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [learned, setLearned] = useState(0);
  const [favorites, setFavorites] =
    useState<string[]>([]);

const [selectedWord, setSelectedWord] =
  useState("");



    const [learnedWords, setLearnedWords] =
  useState<string[]>([]);


const [isLoaded, setIsLoaded] =
  useState(false);


  useEffect(() => {
    const savedXp =
      localStorage.getItem("xp");
    const savedStreak =
      localStorage.getItem("streak");
    const savedLearned =
      localStorage.getItem("learned");
    const savedFavorites =
      localStorage.getItem(
        "favorites"
      );

      const savedLearnedWords =
  localStorage.getItem(
    "learnedWords"
  );

    if (savedXp)
      setXp(Number(savedXp));

    if (savedStreak)
      setStreak(
        Number(savedStreak)
      );

    if (savedLearned)
      setLearned(
        Number(savedLearned)
      );

    if (savedFavorites) {
      setFavorites(
        JSON.parse(savedFavorites)
      );
    }

    if (savedLearnedWords) {
  setLearnedWords(
    JSON.parse(savedLearnedWords)
  );
}
setIsLoaded(true);



  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "xp",
      String(xp)
    );

    localStorage.setItem(
      "streak",
      String(streak)
    );

    localStorage.setItem(
      "learned",
      String(learned)
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

localStorage.setItem(
  "learnedWords",
  JSON.stringify(learnedWords)
);


  }, [
   xp,
  streak,
  learned,
  favorites,
  learnedWords,
  ]);

  const filteredWords =
    allWords.filter((word) => {
      const matchCategory =
        selectedCategory ===
          "All" ||
        word.category ===
          selectedCategory;

      const matchSearch =
        word.english
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchFavorites =
        !favoritesOnly ||
        favorites.includes(
          word.english
        );

      return (
        matchCategory &&
        matchSearch &&
        matchFavorites
      );
    });

    console.log(
  allWords.find(
    (x) => x.english === "Dashboard"
  )
);

  const current =
    filteredWords.length > 0
      ? filteredWords[
          index %
            filteredWords.length
        ]
      : null;

  const isFavorite =
    current
      ? favorites.includes(
          current.english
        )
      : false;

  const level =
    useMemo(() => {
      if (xp >= 1000)
        return "👑 English Pro";

      if (xp >= 600)
        return "🚀 Data Expert";

      if (xp >= 300)
        return "💼 Senior BI Analyst";

      if (xp >= 100)
        return "⭐ BI Analyst";

      return "🌱 Beginner";
    }, [xp]);

  const progress =
    (Math.min(xp, 100) /
      100) *
    100;

  function nextWord() {
    setShowTranslation(
      false
    );

    if (
      filteredWords.length ===
      0
    )
      return;

    setIndex(
      (prev) =>
        (prev + 1) %
        filteredWords.length
    );
  }
  function previousWord() {
  setShowTranslation(false);

  if (filteredWords.length === 0)
    return;

  setIndex((prev) =>
    prev === 0
      ? filteredWords.length - 1
      : prev - 1
  );
}

function randomWord() {
  setShowTranslation(false);

  if (filteredWords.length === 0)
    return;

  const randomIndex = Math.floor(
    Math.random() *
      filteredWords.length
  );

  setIndex(randomIndex);
}

 function markLearned() {
  if (!current) return;

  setXp(
    (prev) => prev + 10
  );

  setStreak(
    (prev) => prev + 1
  );

  if (
    !learnedWords.includes(
      current.english
    )
  ) {
    setLearned(
      (prev) => prev + 1
    );

    setLearnedWords(
      (prev) => [
        ...prev,
        current.english,
      ]
    );
  }

  nextWord();
}

  function toggleFavorite() {
    if (!current) return;

    if (
      favorites.includes(
        current.english
      )
    ) {
      setFavorites((prev) =>
        prev.filter(
          (x) =>
            x !==
            current.english
        )
      );
    } else {
      setFavorites((prev) => [
        ...prev,
        current.english,
      ]);
    }
  }

 function speak(
  text: string,
  lang = "en-US"
) {
  window.speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = lang;
  utterance.rate = 0.9;

  window.speechSynthesis.speak(
    utterance
  );
}

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <Link
        href="/dashboard"
        className="inline-block mb-8 bg-slate-800 px-5 py-3 rounded-xl hover:bg-slate-700"
      >
        ← Dashboard
      </Link>

      {/* Search */}
      <div className="bg-slate-900 rounded-3xl p-6 mb-10">
        <div className="flex flex-wrap gap-4">
          <input
            value={search}
            onChange={(e) => {
              setSearch(
                e.target.value
              );
              setIndex(0);
            }}
            placeholder="🔍 Search..."
            className="bg-slate-800 rounded-xl px-4 py-3 outline-none"
          />

          <select
            value={
              selectedCategory
            }
            onChange={(e) => {
              setSelectedCategory(
                e.target.value
              );
              setIndex(0);
            }}
            className="bg-slate-800 rounded-xl px-4 py-3"
          >
            {categories.map(
              (c) => (
                <option
                  key={c}
                  value={c}
                >
                  {c}
                </option>
              )
            )}
          </select>



<select
  onChange={(e) => {
    const newIndex =
      filteredWords.findIndex(
        (w) =>
          w.english ===
          e.target.value
      );

    if (newIndex >= 0) {
      setIndex(newIndex);
      setShowTranslation(false);
    }
  }}
  className="bg-slate-800 rounded-xl px-4 py-3 min-w-[250px]"
>
  <option value="">
    📚 Select Word
  </option>

  {filteredWords.map(
    (word, i) => (
      <option
        key={`${word.english}-${i}`}
        value={word.english}
      >
        {word.english}
      </option>
    )
  )}
</select>






          <button
            onClick={() =>
              setFavoritesOnly(
                !favoritesOnly
              )
            }
            className="bg-yellow-600 px-5 py-3 rounded-xl"
          >
            ⭐ Favorites Only
          </button>

<Link
  href="/flashcards/learned"
  className="bg-green-600 px-5 py-3 rounded-xl hover:bg-green-500"
>
  📚 Learned Words
</Link>

<Link
  href="/quiz"
  className="bg-red-600 px-5 py-3 rounded-xl"
>
  🎯 Quiz
</Link>

        </div>
<div className="mt-5 flex flex-wrap gap-6 text-slate-300">
  <p>📚 Words: {filteredWords.length}</p>
  <p>⚡ XP: {xp}</p>
  <p>🔥 Streak: {streak}</p>
  <p>✅ Learned: {learned}</p>
</div>
       
       
      </div>

      {current && (
        <div className="bg-slate-900 rounded-3xl p-10 max-w-5xl">

<div className="w-full h-3 bg-slate-800 rounded-full mb-6 overflow-hidden">
  <div
    className="h-full bg-violet-500 transition-all duration-300"
    style={{
      width: `${
        ((index + 1) /
          filteredWords.length) *
        100
      }%`,
    }}
  />
</div>


          <h2 className="text-6xl font-bold text-violet-300">
            {
              current.english
            }
          </h2>

          <div className="flex gap-3 mt-5 flex-wrap">
            <span className="bg-violet-700 px-3 py-1 rounded-full text-sm">
              📂{" "}


              {
                current.category
              }
            </span>

              {(current as any)?.difficulty && (
  <span className="bg-cyan-700 px-3 py-1 rounded-full text-sm">
    📈 {(current as any).difficulty}
  </span>
)}
 

          </div>

        {showTranslation && (
  <div className="mt-8 space-y-6">

    {/* Word Translations */}
    <div className="grid gap-3">
      <div className="bg-slate-800 p-4 rounded-xl">
        <p className="text-slate-400 text-sm">
          
        </p>
        <p className="text-2xl font-semibold">
          {current.georgian}
        </p>
      </div>

      <div className="bg-slate-800 p-4 rounded-xl">
        <p className="text-slate-400 text-sm">
          
        </p>
        <p className="text-2xl font-semibold">
          {current.russian}
        </p>
      </div>

 

{(current as any).chinese && (
  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-slate-400 text-sm">
       Chinese
    </p>

    

    <p className="text-2xl font-semibold">
      {(current as any).chinese}
    </p>
  </div>
)} 

 {(current as any).chinesePinyin && (
  <p className="text-lg text-yellow-300 italic mt-2">
    📖 {(current as any).chinesePinyin}
  </p>
)}


    </div> 


 


    {/* Sentences */}
    <div className="space-y-3">
      <div className="bg-slate-800 p-4 rounded-xl">
        <p className="text-slate-400 text-sm">
          Sentence
        </p>
        <p className="text-lg">
          {current.sentence}
        </p>
      </div>

      {(current as any).russianSentence && (
        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-slate-400 text-sm">
            
          </p>
          <p className="text-lg">
            {(current as any).russianSentence}
          </p>
        </div>
      )}

      {(current as any).georgianSentence && (
        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-slate-400 text-sm">
            
          </p>
          <p className="text-lg">
            {(current as any).georgianSentence}
          </p>
        </div>
      )}

{(current as any).chineseSentence && (
  <div className="bg-slate-800 p-4 rounded-xl">
    <p className="text-slate-400 text-sm">
       Chinese Sentence
    </p>

    <p className="text-lg">
      {(current as any).chineseSentence}
    </p>
  </div>
)}

{(current as any).chineseSentencePinyin && (
  <p className="text-lg text-yellow-300 italic mt-2">
    📖 {(current as any).chineseSentencePinyin}
  </p>
)}


    </div>

  </div>
)} 








       

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() =>
                setShowTranslation(
                  true
                )
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
              🔊 EN Word
            </button>

            <button
              onClick={() =>
                speak(
                  current.sentence
                )
              }
              className="bg-cyan-600 px-6 py-3 rounded-xl"
            >
              🔊 EN Sentence
            </button>


    
<button
  onClick={() =>
    speak(
      current.russian,
      "ru-RU"
    )
  }
  className="bg-indigo-700 px-5 py-3 rounded-xl"
>
  🔊 RU Word
    
</button>

           {(current as any)
  .russianSentence && (
  <button
    onClick={() =>
      speak(
        (current as any)
          .russianSentence,
        "ru-RU"
      )
    }
    className="bg-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-500 transition"
  >
    RU Sentence
  </button>
)}




{(current as any).chinese && (
  <button
    onClick={() =>
      speak(
        (current as any).chinese,
        "zh-CN"
      )
    }
    className="bg-red-600 px-6 py-3 rounded-xl"
  >
    CN Word
  </button>
)}

{(current as any).chineseSentence && (
  <button
    onClick={() =>
      speak(
        (current as any).chineseSentence,
        "zh-CN"
      )
    }
    className="bg-red-700 px-6 py-3 rounded-xl"
  >
    CN Sentence
  </button>
)}






 

            <button
              onClick={
                markLearned
              }
              className="bg-green-600 px-6 py-3 rounded-xl"
            >
              ✅ Learned
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

       <div className="flex flex-wrap gap-4">
  <button
    onClick={previousWord}
    className="bg-slate-700 px-6 py-3 rounded-xl hover:bg-slate-600 transition"
  >
    ⬅️ Back
  </button>

  <button
    onClick={randomWord}
    className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-500 transition"
  >
    🔀 Random
  </button>

  <button
    onClick={nextWord}
    className="bg-slate-700 px-6 py-3 rounded-xl hover:bg-slate-600 transition"
  >
    Next Word ➡️
  </button>
</div>



          </div>
        </div>
      )}

      {!current && (
        <div className="text-center py-20">
          <h2 className="text-4xl text-slate-400">
            😢 No words found
          </h2>
        </div>
      )}
    </main>
  );
}