"use client";

import { useEffect, useState } from "react";

export default function useAchievements() {
  const [unlocked, setUnlocked] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("achievements");

    if (saved) {
      setUnlocked(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "achievements",
      JSON.stringify(unlocked)
    );
  }, [unlocked]);

  const unlock = (id: string) => {
    setUnlocked((prev) =>
      prev.includes(id)
        ? prev
        : [...prev, id]
    );
  };

  const isUnlocked = (id: string) =>
    unlocked.includes(id);

  return {
    unlocked,
    unlock,
    isUnlocked,
  };
}