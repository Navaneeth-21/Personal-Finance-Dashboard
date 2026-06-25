import type { Transaction } from "../types/transaction";

type TransactionTableProps = {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  onEdit: (transaction: Transaction) => void;
};

const TransactionTable = ({
  transactions,
  onDelete,
  onEdit,
}: TransactionTableProps) => {
  if (transactions.length === 0) {
    return (
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Transactions</h2>
        <p className="mt-4 text-slate-500">No Transactions Found !!!</p>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-2xl bg-[#d7e5e5] p-6 shadow-sm dark:bg-zinc-800 transition-colors duration-300">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
        Transactions
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="border-b border-slate-400 text-left">
              <th className="pb-3 pr-4 font-semibold  dark:text-slate-400 ">
                Title
              </th>
              <th className="pb-3 pr-4 font-semibold  dark:text-slate-400 ">
                Amount
              </th>
              <th className="pb-3 pr-4 font-semibold  dark:text-slate-400 ">
                Category
              </th>
              <th className="pb-3 pr-4 font-semibold  dark:text-slate-400 ">
                Type
              </th>
              <th className="pb-3 pr-4 font-semibold  dark:text-slate-400 ">
                Date
              </th>
              <th className="pb-3 px-2 font-semibold  dark:text-slate-400 ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-slate-400">
                <td className="py-4 pr-4 dark:text-slate-100">
                  {transaction.title}
                </td>
                <td className="py-4 pr-4 dark:text-slate-100">
                  ₹{transaction.amount}
                </td>
                <td className="py-4 pr-4 dark:text-slate-100">
                  {transaction.category}
                </td>
                <td className="py-4 pr-4 dark:text-slate-100">
                  {transaction.type}
                </td>
                <td className="py-4 pr-4 dark:text-slate-100">
                  {transaction.date}
                </td>
                <td className="py-4">
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => onEdit(transaction)}
                      className="rounded-lg text-white px-3 py-2 text-sm font-medium bg-blue-500 cursor-pointer  transition hover:text-slate-600 hover:underline underline-offset-1"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(transaction.id)}
                      className="rounded-lg text-white px-3 py-2 text-sm font-medium bg-red-500 cursor-pointer transition hover:text-slate-900 hover:underline underline-offset-1"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;
