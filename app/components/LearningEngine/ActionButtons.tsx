"use client";

type ActionButtonsProps = {
  onKnow: () => void;
  onDontKnow: () => void;
};

export default function ActionButtons({
  onKnow,
  onDontKnow,
}: ActionButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">

      <button
        onClick={onDontKnow}
        className="rounded-2xl bg-red-600 py-4 text-xl font-semibold text-white hover:bg-red-500 transition"
      >
        ❌ I Didn't Know
      </button>

      <button
        onClick={onKnow}
        className="rounded-2xl bg-emerald-600 py-4 text-xl font-semibold text-white hover:bg-emerald-500 transition"
      >
        ✅ I Knew It
      </button>

    </div>
  );
}