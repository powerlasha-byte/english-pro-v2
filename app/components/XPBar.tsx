type Props = {
  xp: number;
  level: number;
  progress: number;
};

export default function XPBar({
  xp,
  level,
  progress,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">

      <div className="flex justify-between text-sm">

        <span className="font-bold text-violet-300">
          🏆 Level {level}
        </span>

        <span className="text-slate-400">
          {xp} XP
        </span>

      </div>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-violet-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-2 text-xs text-slate-400">
        {progress} / 100 XP
      </p>

    </div>
  );
}