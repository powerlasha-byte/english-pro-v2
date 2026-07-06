type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-xl px-5 py-2 font-medium transition ${
            selected === category
              ? "bg-violet-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}