const ExpenseList = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Expenses</h2>

      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center py-4">
              No expenses yet
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 font-semibold">
        Total: ₹0
      </div>
    </div>
  );
};

export default ExpenseList;
