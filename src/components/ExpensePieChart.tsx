import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import type { Transaction } from "../types/transaction";

type ExpensePieChartProps = {
  transactions: Transaction[];
};

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#ca8a04",
  "#7c3aed",
  "#0891b2",
];

function ExpensePieChart({ transactions }: ExpensePieChartProps) {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expenses",
  );

  const categoryTotals = expenseTransactions.reduce(
    (accumulator: Record<string, number>, transaction) => {
      const category = transaction.category;

      accumulator[category] = (accumulator[category] || 0) + transaction.amount;

      return accumulator;
    },
    {},
  );

  const chartData = Object.entries(categoryTotals).map(
    ([category, amount]) => ({
      name: category,
      value: amount,
    }),
  );

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Expense Breakdown
      </h2>

      {chartData.length === 0 ? (
        <div className="flex h-75 items-center justify-center text-slate-500">
          No expense data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}

export default ExpensePieChart;
