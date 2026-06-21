export type Transaction = {
    id: string;
    title: string;
    amount: number;
    category: string;
    type: "Income" | "Expenses"
    date: string;
};
