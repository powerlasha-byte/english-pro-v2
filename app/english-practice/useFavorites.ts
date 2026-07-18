"use client";

import { useApp } from "../context/AppContext";

export default function useFavorites() {
  const { favorites, setFavorites } = useApp();

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}