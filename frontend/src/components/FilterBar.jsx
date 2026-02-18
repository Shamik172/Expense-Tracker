const FilterBar = () => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow">
      <input
        placeholder="Filter by category"
        className="border p-2 rounded"
      />

      <button className="border px-4 py-2 rounded">
        Sort by Date
      </button>
    </div>
  );
};

export default FilterBar;
