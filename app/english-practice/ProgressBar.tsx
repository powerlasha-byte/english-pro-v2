"use client";

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percent =
    total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="space-y-2">

      <div className="flex justify-between text-sm text-slate-400">
        <span>
          Progress
        </span>

        <span>
          {current} / {total}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <div
          className="h-full rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>
  );
}