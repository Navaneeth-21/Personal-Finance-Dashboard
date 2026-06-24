import DashboardPage from "./pages/DashboardPage";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        dark:bg-slate-950
        dark:text-white
        transition-colors
      "
    >
      <DashboardPage theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
