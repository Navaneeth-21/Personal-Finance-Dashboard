type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <section className="mt-6 flex items-center justify-center gap-2 transition-colors duration-200">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 cursor-pointer"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`rounded-lg px-4 py-2 ${
            currentPage === index + 1
              ? "bg-slate-900 text-white dark:bg-zinc-800"
              : "border border-slate-300 bg-white cursor-pointer dark:text-slate-900"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-slate-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 cursor-pointer"
      >
        Next
      </button>
    </section>
  );
}

export default Pagination;
