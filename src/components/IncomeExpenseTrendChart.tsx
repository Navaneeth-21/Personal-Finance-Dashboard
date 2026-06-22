import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import type { Transaction } from "../types/transaction";

type IncomeExpenseTrendChartProps = {
  transactions: Transaction[];
};

function IncomeExpenseTrendChart({
  transactions,
}: IncomeExpenseTrendChartProps) {
  const monthlyData = transactions.reduce(
    (
      accumulator: Record<
        string,
        {
          income: number;
          expenses: number;
          monthIndex: number;
        }
      >,
      transaction,
    ) => {
      const monthIndex = new Date(transaction.date).getMonth();

      const month = new Date(transaction.date).toLocaleString("en-US", {
        month: "short",
      });

      if (!accumulator[month]) {
        accumulator[month] = {
          income: 0,
          expenses: 0,
          monthIndex,
        };
      }

      if (transaction.type === "Income") {
        accumulator[month].income += transaction.amount;
      } else {
        accumulator[month].expenses += transaction.amount;
      }

      return accumulator;
    },
    {},
  );

  const chartData = Object.entries(monthlyData)
    .map(([month, values]) => ({
      month,
      monthIndex: values.monthIndex,
      income: values.income,
      expenses: values.expenses,
    }))
    .sort((a, b) => a.monthIndex - b.monthIndex);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Income vs Expense Trend
      </h2>

      {chartData.length === 0 ? (
        <div className="flex h-75 items-center justify-center text-slate-500">
          No trend data available
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#16a34a"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#dc2626"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}

export default IncomeExpenseTrendChart;
