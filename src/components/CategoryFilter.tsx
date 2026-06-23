type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="mt-4 flex flex-wrap gap-1.5">
      <button
        onClick={() => onCategoryChange("All")}
        className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition ${
          selectedCategory === "All"
            ? "bg-slate-900 text-white"
            : "bg-white text-slate-700 border border-slate-300"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition ${
            selectedCategory === category
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-700 border border-slate-300"
          }`}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

export default CategoryFilter;
