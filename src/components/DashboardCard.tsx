interface DashboardCardProps {
  title: string;
  amount: string;
}

const DashboardCard = ({ title, amount }: DashboardCardProps) => {
  return (
    <div className="rounded-xl bg-teal-200 p-6 shadow-xl">
      <h3 className="text-sm font-medium text-">{title}</h3>
      <p className="mt-3 text-3xl font-bold text-slate-900">{amount}</p>
    </div>
  );
};

export default DashboardCard;
