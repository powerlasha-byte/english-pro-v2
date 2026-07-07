"use client";

import { useEffect, useState } from "react";

export default function useXP() {
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("xp");

    if (saved) {
      setXP(Number(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
  }, [xp]);

  const addXP = (amount: number) => {
    setXP((prev) => prev + amount);
  };

  const resetXP = () => {
    setXP(0);
  };

  const level = Math.floor(xp / 100) + 1;

  const progress = xp % 100;

  return {
    xp,
    level,
    progress,
    addXP,
    resetXP,
  };
}