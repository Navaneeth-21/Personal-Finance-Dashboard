function TransactionTableSkeleton() {
  return (
    <section
      className="
        animate-pulse
        rounded-2xl
        bg-white
        mt-8
        p-6
        shadow-sm
        dark:bg-slate-900
      "
    >
      <div className="mb-6 h-6 w-48 rounded bg-slate-300 dark:bg-slate-700" />
      <div className="space-y-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="
                h-12
                rounded
                bg-slate-300
                dark:bg-slate-700
              "
          />
        ))}
      </div>
    </section>
  );
}

export default TransactionTableSkeleton;
