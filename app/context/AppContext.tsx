"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { checkAchievements } from "../services/achievementEngine";

type AppContextType = {
  xp: number;
  setXP: React.Dispatch<React.SetStateAction<number>>;

  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;

  achievements: string[];
  setAchievements: React.Dispatch<React.SetStateAction<string[]>>;

  unlockAchievement: (id: string) => void;
  isUnlocked: (id: string) => boolean;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [xp, setXP] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);

  const unlockAchievement = (id: string) => {
    setAchievements((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    );
  };

  const isUnlocked = (id: string) => {
    return achievements.includes(id);
  };

  useEffect(() => {
    const savedXP = Number(localStorage.getItem("xp") || 0);

    const savedFav = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const savedAch = JSON.parse(
      localStorage.getItem("achievements") || "[]"
    );

    setXP(savedXP);
    setFavorites(savedFav);
    setAchievements(savedAch);
  }, []);

  useEffect(() => {
    localStorage.setItem("xp", String(xp));
  }, [xp]);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(
      "achievements",
      JSON.stringify(achievements)
    );
  }, [achievements]);

  useEffect(() => {
  checkAchievements({
    favorites,
    xp,
    unlockAchievement,
  });
}, [favorites, xp]);

  return (
    <AppContext.Provider
      value={{
        xp,
        setXP,

        favorites,
        setFavorites,

        achievements,
        setAchievements,

        unlockAchievement,
        isUnlocked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}