"use client";

import { useApp } from "../context/AppContext";

export default function useXP() {
  const { xp, setXP } = useApp();

  const addXP = (amount: number) => {
    setXP((prev) => prev + amount);
  };

  return {
    xp,
    addXP,
  };
}