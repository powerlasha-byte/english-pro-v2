"use client";

type FavoriteButtonProps = {
  active: boolean;
  onClick: () => void;
};

export default function FavoriteButton({
  active,
  onClick,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        flex items-center gap-2
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-semibold
        border
        transition-all
        duration-300
        active:scale-95
        ${
          active
            ? "bg-violet-700 border-violet-500 text-white shadow-lg shadow-violet-700/20 hover:bg-violet-600 scale-105"
            : "bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-violet-500 hover:scale-105"
        }
      `}
    >
      <span
        className={`
          text-xl
          transition-all
          duration-300
          ${
            active
              ? "scale-125 rotate-12"
              : "group-hover:scale-110"
          }
        `}
      >
        {active ? "⭐" : "☆"}
      </span>

      <span>
        {active ? "Saved" : "Favorite"}
      </span>
    </button>
  );
}