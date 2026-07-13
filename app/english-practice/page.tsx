"use client";

import { useMemo, useState } from "react";

import Layout from "../components/Layout";
import PracticeCard from "./PracticeCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

import { allSentences } from "../data/practice";
import useFavorites from "./useFavorites";
import useXP from "./useXP";
import PremiumHeader from "../components/PremiumHeader";
import AchievementPopup from "../components/AchievementPopup";

export default function EnglishPractice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showAchievement, setShowAchievement] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(allSentences.map((x) => x.category))),
  ];

  const {
  toggleFavorite,
  isFavorite,
} = useFavorites();

const {
  addXP,
} = useXP();

const filteredSentences = useMemo(() => {
  return allSentences.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch =
      item.english.toLowerCase().includes(search.toLowerCase()) ||
      item.georgian.toLowerCase().includes(search.toLowerCase()); 

      

   
return categoryMatch && searchMatch;
  });
}, [selectedCategory, search]);


const current =
  filteredSentences.length > 0
    ? filteredSentences[currentIndex]
    : null;

const nextSentence = () => {
  if (currentIndex < filteredSentences.length - 1) {
    setCurrentIndex((prev) => prev + 1);
    addXP(2);
  }
};

const previousSentence = () => {
  if (currentIndex > 0) {
    setCurrentIndex((prev) => prev - 1);
  }
};

const randomSentence = () => {
  if (filteredSentences.length === 0) return;

  const randomIndex = Math.floor(
    Math.random() * filteredSentences.length
  );

  setCurrentIndex(randomIndex);
  addXP(1);
};


console.log("AchievementPopup =", AchievementPopup);

  return (

    
    <Layout>

    <AchievementPopup
      show={showAchievement}
      title="First Favorite ⭐"
      reward="+5 XP"
    />


      <div className="space-y-6">

        <PremiumHeader />

        <SearchBar
          value={search}
          onChange={(value) => {
            setSearch(value);
            setCurrentIndex(0);
          }}
        /> 

        <div className="flex justify-end">






  <button
    onClick={randomSentence}
    className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold hover:bg-emerald-500 transition"
  >
    🎲 Random
  </button>
</div>

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={(category) => {
            setSelectedCategory(category);
            setCurrentIndex(0);
          }}
        />

        {current ? (
          <>



          <PracticeCard
  english={current.english}
  georgian={current.georgian}
  favorite={isFavorite(current.english)}

onFavorite={() => {
  toggleFavorite(current.english);
  addXP(5);

  setShowAchievement(true);

  setTimeout(() => {
    setShowAchievement(false);
  }, 2500);
}}


 
/>


            

            <div className="flex items-center justify-between">

              <button
                onClick={previousSentence}
                disabled={currentIndex === 0}
                className="rounded-xl bg-slate-800 px-6 py-3 hover:bg-slate-700 disabled:opacity-30"
              >
                ⬅ Previous
              </button>

              <span className="font-semibold text-slate-400">
                {currentIndex + 1} / {filteredSentences.length}
              </span>

              <button
                onClick={nextSentence}
                disabled={
                  currentIndex === filteredSentences.length - 1
                }
                className="rounded-xl bg-violet-600 px-6 py-3 hover:bg-violet-500 disabled:opacity-30"
              >
                Next ➜
              </button>

            </div>
          </>
        ) : (
          <div className="rounded-2xl bg-slate-900 p-10 text-center text-slate-400">
            No sentences found.
          </div>
        )}

      </div>
    </Layout>
  );
}