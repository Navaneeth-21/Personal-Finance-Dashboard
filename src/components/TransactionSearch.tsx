type TransactionSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

function TransactionSearch({
  searchTerm,
  onSearchChange,
}: TransactionSearchProps) {
  return (
    <section className="mt-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by title or category or type ..."
        className="w-72 rounded-xl border border-slate-500 bg-white px-3 py-3 outline-none focus:border-slate-950 dark:bg-slate-900"
      />
    </section>
  );
}

export default TransactionSearch;
