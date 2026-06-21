import { createContext, useEffect, useState } from "react";

import type { Transaction } from "../types/transaction";

type TransactionContextType = {
  transactions: Transaction[];
  editingTransaction: Transaction | null;

  addTransaction: (transaction: Omit<Transaction, "id">) => void;

  updateTransaction: (transaction: Transaction) => void;

  deleteTransaction: (id: string) => void;

  editTransaction: (transaction: Transaction) => void;
};

const TransactionContext = createContext<TransactionContextType | null>(null);

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    title: "Salary",
    amount: 50000,
    category: "Job",
    type: "Income",
    date: "2026-06-13",
  },
];

type TransactionProviderProps = {
  children: React.ReactNode;
};

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const stored = localStorage.getItem("transactions");

    return stored ? JSON.parse(stored) : INITIAL_TRANSACTIONS;
  });

  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    setTransactions((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        ...transaction,
      },
    ]);
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    setTransactions((previous) =>
      previous.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );

    setEditingTransaction(null);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id),
    );
  };

  const editTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        editingTransaction,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;
