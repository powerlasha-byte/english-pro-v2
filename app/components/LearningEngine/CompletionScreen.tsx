"use client";

type CompletionScreenProps = {
  title?: string;
  description?: string;
};

export default function CompletionScreen({
  title = "🎉 Lesson Completed",
  description = "Great job! You have completed this lesson.",
}: CompletionScreenProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-12 text-center">

      <h1 className="text-5xl font-bold text-green-400">
        {title}
      </h1>

      <p className="mt-6 text-xl text-slate-300">
        {description}
      </p>

    </div>
  );
}