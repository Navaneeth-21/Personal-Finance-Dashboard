import { useState } from "react";
import type { Transaction } from "../types/transaction";

type FormErrors = {
  title?: string;
  amount?: string;
  category?: string;
  date?: string;
};

type TransactionFormProps = {
  editingTransaction: Transaction | null;
  onSubmit: (transaction: Omit<Transaction, "id">) => void;
  onUpdate: (transaction: Transaction) => void;
};

const TransactionForm = ({
  editingTransaction,
  onSubmit,
  onUpdate,
}: TransactionFormProps) => {
  const [formData, setFormData] = useState({
    title: editingTransaction?.title ?? "",
    amount: editingTransaction?.amount?.toString() ?? "",
    category: editingTransaction?.category ?? "",
    type: (editingTransaction?.type ?? "Expenses") as "Income" | "Expenses",
    date: editingTransaction?.date ?? "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors: FormErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title = "Title is Required...";
    }

    if (!formData.amount.trim()) {
      validationErrors.amount = "Amount is Required";
    } else if (Number(formData.amount) <= 0) {
      validationErrors.amount = "Amount should be greater than 0";
    }

    if (!formData.category.trim()) {
      validationErrors.category = "Category is Required";
    }

    if (!formData.date.trim()) {
      validationErrors.date = "Date is Required";
    }

    // If there is any validation errors then we should stop submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const transactionData = {
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type,
      date: formData.date,
    };

    if (editingTransaction) {
      onUpdate({
        id: editingTransaction.id,
        ...transactionData,
      });
    } else {
      onSubmit(transactionData);
    }

    setFormData({
      title: "",
      amount: "",
      category: "",
      type: "Expenses",
      date: "",
    });
  };

  return (
    <section className="mt-7 rounded-2xl bg-mauve-200 px-6 shadow-sm">
      <h2 className=" mt-8 text-xl font-semibold text-slate-900">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit} className="mt-3 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                title: event.target.value,
              }))
            }
            placeholder="e.g. Salary"
            className={`w-full rounded-lg border px-4 py-2 outline-none focus:border-slate-900 ${errors.title ? "border-red-500" : "border-slate-300"}`}
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={formData.amount}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                amount: event.target.value,
              }))
            }
            placeholder="e.g. 50000"
            className={`w-full rounded-lg border  px-4 py-2 outline-none focus:border-slate-900 ${errors.amount ? "border-red-500" : "border-slate-300"}`}
          />

          {errors.amount && (
            <p className="mt-1 text-sm text-red-500">{errors.amount}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Category
          </label>
          <input
            id="category"
            type="text"
            value={formData.category}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                category: event.target.value,
              }))
            }
            placeholder="e.g. Food"
            className={`w-full rounded-lg border  px-4 py-2 outline-none focus:border-slate-900 ${errors.category ? "border-red-500" : "border-slate-300"}`}
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">{errors.category}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Type
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                type: event.target.value as "Income" | "Expenses",
              }))
            }
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-slate-900"
          >
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={formData.date}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                date: event.target.value,
              }))
            }
            className={`w-full rounded-lg border  px-4 py-2 focus:border-slate-900 ${errors.date ? "border-red-500" : "border-slate-300"}`}
          />

          {errors.date && (
            <p className="mt-1 text-sm text-red-500">{errors.date}</p>
          )}
        </div>
        <div className="md:col-span-2 flex justify-center mb-4">
          <button
            type="submit"
            className={` rounded-xl px-2 py-2 cursor-pointer transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 ${editingTransaction ? "bg-blue-500" : "bg-green-600"}`}
          >
            {editingTransaction ? "Update Transaction" : "Add Transaction"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
