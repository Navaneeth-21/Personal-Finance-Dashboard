type TransactionSortProps = {
  sortOption: string;
  onSortChange: (value: string) => void;
};

function TransactionSort({ sortOption, onSortChange }: TransactionSortProps) {
  return (
    <section className="mt-4">
      <select
        value={sortOption}
        onChange={(event) => onSortChange(event.target.value)}
        className=" rounded-lg text-sm font-medium border border-slate-300 bg-white px-4 py-2 outline-none focus:border-slate-900"
      >
        <option value="date-desc">Newest First</option>

        <option value="date-asc">Oldest First</option>

        <option value="amount-desc">Highest Amount</option>

        <option value="amount-asc">Lowest Amount</option>

        <option value="title-asc">Title A-Z</option>

        <option value="title-desc">Title Z-A</option>
      </select>
    </section>
  );
}

export default TransactionSort;
