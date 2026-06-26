import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import type { Transaction } from "../types/transaction";

type MonthlyExpenseChartProps = {
  transactions: Transaction[];
};

function MonthlyExpenseChart({ transactions }: MonthlyExpenseChartProps) {
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "Expenses",
  );

  const monthlyTotals = expenseTransactions.reduce(
    (accumulator: Record<string, number>, transaction) => {
      const month = new Date(transaction.date).toLocaleString("en-US", {
        month: "short",
      });

      accumulator[month] = (accumulator[month] || 0) + transaction.amount;

      return accumulator;
    },
    {},
  );

  const chartData = Object.entries(monthlyTotals).map(([month, amount]) => ({
    month,
    expenses: amount,
  }));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800 transition-colors duration-300">
      <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-white">
        Monthly Expenses
      </h2>

      {chartData.length === 0 ? (
        <div className="flex h-75 items-center justify-center text-zinc-500 dark:text-white">
          No monthly expense data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="expenses" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}

export default MonthlyExpenseChart;
