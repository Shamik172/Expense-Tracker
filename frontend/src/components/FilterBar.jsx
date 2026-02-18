const FilterBar = ({ category, setCategory, sort, setSort }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow">
      <input
        placeholder="Filter by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        onClick={() => setSort("date_desc")}
        className="border px-4 py-2 rounded"
      >
        Sort by Date
      </button>
    </div>
  );
};

export default FilterBar;
