const filterOptions = [
  { value: "all", label: "All" },
  { value: "name", label: "Class Name" },
  { value: "shift", label: "Shift" },
  { value: "level", label: "Level" },
  { value: "teacher", label: "Teacher" },
];

const ClassFilterBar = ({ filterType, setFilterType, search, setSearch, showFullOnly, setShowFullOnly }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-4">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3 py-2 text-sm"
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={filterType === "all" ? "Search name, shift, level, teacher" : `Search by ${filterType}`}
        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-3 py-2 text-sm"
      />

      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
        <input
          type="checkbox"
          className="accent-cyan-500 dark:accent-cyan-400"
          checked={showFullOnly}
          onChange={(e) => setShowFullOnly(e.target.checked)}
        />
        Show full
      </label>
    </div>
  );
};

export default ClassFilterBar;
