function Navbar() {
  return (
    <header className="rounded-2xl  bg-orange-200 shadow-xl">
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Personal Finance Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your income and expenses efficiently.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-gray-300 border border-slate-500 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-400 cursor-pointer"
        >
          Theme Toggle
        </button>
      </div>
    </header>
  );
}

export default Navbar;
