import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

export function useTransactions() {
    const context = useContext(TransactionContext);

    if (!context) {
        throw new Error(
            "useTransactions must be used within a TransactionProvider."
        );
    }

    return context;
}