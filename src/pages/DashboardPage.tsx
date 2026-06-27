import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

import { useTransactions } from "../hooks/useTransaction";
import ExpensePieChart from "../components/ExpensePieChart";
import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
import IncomeExpenseTrendChart from "../components/IncomeExpenseTrendChart";
import TransactionSearch from "../components/TransactionSearch";
import CategoryFilter from "../components/CategoryFilter";
import TransactionSort from "../components/TransactionSort";
import Pagination from "../components/Pagination";
import DashboardCardSkeleton from "../components/DashboardCardSkeleton";

import ChartSkeleton from "../components/ChartSkeleton";

import TransactionTableSkeleton from "../components/TransactionTableSkeleton";

type DashboardPageProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const DashboardPage = ({ theme, toggleTheme }: DashboardPageProps) => {
  const {
    transactions,
    editingTransaction,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    editTransaction,
  } = useTransactions();

  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("date-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Timeout for skeletons
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortOption]);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "Expenses")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalBalance = totalIncome - totalExpenses;
  const totalSavings = totalBalance;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const categories = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  // Filtering Transactions based on search and filter
  const searchedAndFilteredTransactions = transactions.filter((transaction) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      transaction.title.toLowerCase().includes(search) ||
      transaction.category.toLowerCase().includes(search) ||
      transaction.type.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" || transaction.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedTransactions = [...searchedAndFilteredTransactions].sort(
    (a, b) => {
      switch (sortOption) {
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();

        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();

        case "amount-asc":
          return a.amount - b.amount; /// Lowest first

        case "amount-desc":
          return b.amount - a.amount; // highest first

        case "title-asc":
          return a.title.localeCompare(b.title);

        case "title-desc":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    },
  );

  // Calculate the total Pages
  const totalPages = Math.ceil(sortedTransactions.length / ITEMS_PER_PAGE);

  // Slices the Sorted transactions
  const paginatedTransactions = sortedTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            <>
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
            </>
          ) : (
            <>
              <DashboardCard
                title="Total Balance"
                amount={formatCurrency(totalBalance)}
              />
              <DashboardCard
                title="Total Income"
                amount={formatCurrency(totalIncome)}
              />
              <DashboardCard
                title="Total Expense"
                amount={formatCurrency(totalExpenses)}
              />
              <DashboardCard
                title="Total Savings"
                amount={formatCurrency(totalSavings)}
              />
            </>
          )}
        </section>
        {isLoading ? (
          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <ChartSkeleton />
            <ChartSkeleton />
          </section>
        ) : (
          <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <ExpensePieChart transactions={transactions} />
            <MonthlyExpenseChart transactions={transactions} />
          </section>
        )}
        {isLoading ? (
          <section className="mt-8">
            <ChartSkeleton />
          </section>
        ) : (
          <section className="mt-8">
            <IncomeExpenseTrendChart transactions={transactions} />
          </section>
        )}
        <TransactionForm
          key={editingTransaction?.id ?? "new"}
          editingTransaction={editingTransaction}
          onSubmit={addTransaction}
          onUpdate={updateTransaction}
        />
        <TransactionSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <TransactionSort sortOption={sortOption} onSortChange={setSortOption} />
        {isLoading ? (
          <TransactionTableSkeleton />
        ) : (
          <TransactionTable
            transactions={paginatedTransactions}
            onDelete={deleteTransaction}
            onEdit={editTransaction}
          />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default DashboardPage;
