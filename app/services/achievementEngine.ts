export type AchievementEngineProps = {
  favorites: string[];
  xp: number;
  unlockAchievement: (id: string) => void;
};

export function checkAchievements({
  favorites,
  xp,
  unlockAchievement,
}: AchievementEngineProps) {
  // ⭐ First Favorite
  if (favorites.length >= 1) {
    unlockAchievement("first-favorite");
  }

  // 🏆 Collector
  if (favorites.length >= 5) {
    unlockAchievement("collector");
  }

  // ⚡ XP Hunter
  if (xp >= 100) {
    unlockAchievement("xp-hunter");
  }
}