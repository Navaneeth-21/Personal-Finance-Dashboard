function ChartSkeleton() {
  return (
    <section
      className="
        animate-pulse
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        dark:bg-slate-800
      "
    >
      <div className="mb-6 h-6 w-48 rounded bg-slate-300 dark:bg-slate-600" />

      <div className="h-75 rounded bg-slate-300 dark:bg-slate-600" />
    </section>
  );
}

export default ChartSkeleton;
