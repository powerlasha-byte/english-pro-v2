type Props = {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (
    value: string
  ) => void;
  favoritesOnly: boolean;
  setFavoritesOnly: (
    value: boolean
  ) => void;
  categories: string[];
  wordsFound: number;
};

export default function SearchBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  favoritesOnly,
  setFavoritesOnly,
  categories,
  wordsFound,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 mb-10">

      <div className="flex flex-wrap gap-4">

        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="🔍 Search..."
          className="bg-slate-800 rounded-xl px-4 py-3 outline-none"
        />

        <select
          value={
            selectedCategory
          }
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
          className="bg-slate-800 rounded-xl px-4 py-3"
        >
          {categories.map(
            (c) => (
              <option
                key={c}
              >
                {c}
              </option>
            )
          )}
        </select>

        <button
          onClick={() =>
            setFavoritesOnly(
              !favoritesOnly
            )
          }
          className="bg-yellow-600 px-5 py-3 rounded-xl"
        >
          ⭐ Favorites Only
        </button>

      </div>

      <p className="mt-5 text-slate-400">
        Words Found:
        {" "}
        {wordsFound}
      </p>

    </div>
  );
}