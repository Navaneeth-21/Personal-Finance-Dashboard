interface DashboardCardProps {
  title: string;
  amount: string;
}

const DashboardCard = ({ title, amount }: DashboardCardProps) => {
  return (
    <div className="rounded-xl  p-6 shadow-xl bg-blue-300 dark:bg-blue-950 dark:text-blue-400 transition-colors duration-300">
      <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {title}
      </h3>
      <p className="mt-3 text-3xl font-bold text-zinc-800 dark:text-zinc-200">
        {amount}
      </p>
    </div>
  );
};

export default DashboardCard;
