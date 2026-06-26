function DashboardCardSkeleton() {
  return (
    <div
      className="
        animate-pulse
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        dark:bg-slate-900
      "
    >
      <div className="h-4 w-28 rounded bg-slate-300 dark:bg-slate-700" />

      <div className="mt-4 h-8 rounded bg-slate-300 dark:bg-slate-700" />
    </div>
  );
}

export default DashboardCardSkeleton;
