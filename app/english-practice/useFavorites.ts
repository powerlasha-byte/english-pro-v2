/*"use client";

import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("practice-favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "practice-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (english: string) => {
    setFavorites((prev) =>
      prev.includes(english)
        ? prev.filter((x) => x !== english)
        : [...prev, english]
    );
  };

  const isFavorite = (english: string) =>
    favorites.includes(english);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
} */ 


  "use client";

import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("practice-favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    console.log("Saving to LocalStorage:", favorites);

    localStorage.setItem(
      "practice-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (english: string) => {
    console.log("CLICK:", english);

    setFavorites((prev) => {
      console.log("PREV:", prev);

      const next = prev.includes(english)
        ? prev.filter((x) => x !== english)
        : [...prev, english];

      console.log("NEXT:", next);

      return next;
    });
  };

  const isFavorite = (english: string) => {
    return favorites.includes(english);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}