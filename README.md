# Personal Finance Dashboard

A modern and responsive Personal Finance Dashboard built with React, TypeScript, Tailwind CSS, and Recharts. The application enables users to manage transactions, track income and expenses, visualize financial trends, and personalize their experience with persistent theme preferences.

## 🚀 Live Features

### Transaction Management

- Add new transactions
- Edit existing transactions
- Delete transactions
- Form validation with user-friendly error messages
- Transaction categorization
- Income and Expense tracking

### Dashboard Analytics

- Total Balance calculation
- Total Income calculation
- Total Expenses calculation
- Savings overview
- Expense Breakdown Pie Chart
- Monthly Expense Bar Chart
- Income vs Expense Trend Line Chart

### Data Persistence

- Transactions stored in LocalStorage
- Automatic data restoration on refresh
- Theme preference persistence

### User Experience

- Real-time transaction search
- Category-based filtering
- Multi-option transaction sorting
- Pagination support
- Dark Mode support
- Responsive design
- Loading skeletons for improved perceived performance

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### State Management

- React Hooks & Custom Hooks
- Context API

### Data Visualization

- Recharts

### Persistence

- Browser LocalStorage

---

## 📂 Project Structure

<<<<<<< HEAD
- Included only main files
=======
 - Included only main files
>>>>>>> 66f256e76e149eda93ed74668db8073bfe704572

```text
src
│
├── components
│   ├── Navbar.tsx
│   ├── DashboardCard.tsx
│   ├── TransactionForm.tsx
│   ├── TransactionTable.tsx
│   ├── TransactionSearch.tsx
│   ├── CategoryFilter.tsx
│   ├── TransactionSort.tsx
│   ├── Pagination.tsx
│   ├── ExpensePieChart.tsx
│   ├── MonthlyExpenseChart.tsx
│   ├── IncomeExpenseTrendChart.tsx
│   ├── DashboardCardSkeleton.tsx
│   ├── ChartSkeleton.tsx
│   └── TransactionTableSkeleton.tsx
│
├── context
│   └── TransactionContext.tsx
│
├── hooks
│   ├── useTheme.ts
|   └── useTransaction.ts
│
├── pages
│   └── DashboardPage.tsx
│
├── types
│   └── transaction.ts
│
├── App.tsx
└── main.tsx
```

---

## 📊 Dashboard Metrics

The dashboard automatically calculates:

### Total Balance

Total Income - Total Expenses

### Total Income

Sum of all income transactions.

### Total Expenses

Sum of all expense transactions.

### Savings

Remaining amount after expenses.

---

## 📈 Charts

### Expense Breakdown Pie Chart

Visualizes spending distribution across categories.

### Monthly Expense Bar Chart

Displays month-wise expense trends.

### Income vs Expense Trend Chart

Compares monthly income and expenses over time.

---

## 🎨 Dark Mode

Users can switch between:

- Light Theme
- Dark Theme

Theme preference is automatically persisted using LocalStorage.

---

## 🔍 Search, Filter & Sort

### Search

Search transactions by:

- Title
- Category

### Filter

Filter transactions by:

- Food
- Salary
- Shopping
- Fuel
- Entertainment
- Any custom category

### Sorting

Sort transactions by:

- Newest First
- Oldest First
- Highest Amount
- Lowest Amount
- Title A-Z
- Title Z-A

---

## 📄 Pagination

Transactions are paginated to improve performance and usability.

---

## ⚡ Performance Optimizations

- Derived state instead of redundant state
- Component-based architecture
- Reusable UI components
- Loading skeletons for perceived performance
- Pagination for large datasets
- LocalStorage persistence

---

## 🏃 Getting Started

### Clone Repository

```bash
git clone https://github.com/Navaneeth-21/Personal-Finance-Dashboard.git
```

### Navigate to Project

```bash
cd personal-finance-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🎯 Learning Outcomes

While building this project, the following concepts were implemented and practiced:

- React application architecture
- TypeScript with React
- State management patterns
- Context API
- Data visualization
- Responsive UI development
- Tailwind CSS workflows
- LocalStorage persistence
- Reusable component design
- User experience enhancements
- Dashboard development patterns

---

## 📬 Author

Navaneeth Gade

Aspiring Full Stack Developer focused on building scalable web applications using React, TypeScript, Node.js, and modern web technologies.
