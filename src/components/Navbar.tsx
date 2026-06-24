type NavbarProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header className="rounded-2xl p-6 bg-[#b89d72]  dark:bg-zinc-800 transition-colors duration-300">
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between ">
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">
            Personal Finance Dashboard
          </h1>

          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Manage your income and expenses efficiently.
          </p>
        </div>

        <button
          onClick={toggleTheme}
          className="
          rounded-lg
          border
          px-4
          py-2
          transition
          duration-300
          cursor-pointer
        "
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
