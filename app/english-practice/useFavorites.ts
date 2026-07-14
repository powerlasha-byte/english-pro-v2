"use client";

import { useApp } from "../context/AppContext";

export default function useFavorites() {
  const {
    favorites,
    setFavorites,
  } = useApp();

  const toggleFavorite = (english: string) => {
    setFavorites((prev) =>
      prev.includes(english)
        ? prev.filter((x) => x !== english)
        : [...prev, english]
    );
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