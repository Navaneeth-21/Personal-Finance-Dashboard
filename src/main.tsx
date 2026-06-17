import { createRoot } from "react-dom/client";
import "./global/style.css";
import App from "./App.tsx";
import { TransactionProvider } from "./context/TransactionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
);
