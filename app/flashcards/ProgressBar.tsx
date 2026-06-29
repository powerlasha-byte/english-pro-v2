type Props = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 mb-10">

      <p className="mb-4">
        Progress to BI Analyst ⭐
      </p>

      <div className="w-full h-4 rounded-full bg-slate-700 overflow-hidden">

        <div
          className="h-full bg-violet-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}