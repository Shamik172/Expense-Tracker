import { useState } from "react";

const ExpenseForm = () => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow space-y-3"
    >
      <h2 className="text-lg font-semibold">Add Expense</h2>

      <input
        name="amount"
        placeholder="Amount"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <input
        name="date"
        type="date"
        className="w-full border p-2 rounded"
        onChange={handleChange}
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
