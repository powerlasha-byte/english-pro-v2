"use client";

import Layout from "../components/Layout";
import PracticeCard from "../english-practice/PracticeCard";
import { allSentences } from "../data/practice";
import { useApp } from "../context/AppContext";

export default function FavoritesPage() {
  const { favorites, setFavorites } = useApp();

  const favoriteSentences = allSentences.filter((item) =>
    favorites.includes(item.english)
  );

  const removeFavorite = (english: string) => {
    setFavorites((prev) =>
      prev.filter((x) => x !== english)
    );
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold">
            ⭐ Favorite Sentences
          </h1>

          <p className="mt-2 text-slate-400">
            Your saved English practice sentences.
          </p>
        </div>

        {favoriteSentences.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="text-slate-400">
              You don't have any favorite sentences yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {favoriteSentences.map((sentence) => (
              <PracticeCard
                key={sentence.english}
                english={sentence.english}
                georgian={sentence.georgian}
                favorite={true}
                onFavorite={() => removeFavorite(sentence.english)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}