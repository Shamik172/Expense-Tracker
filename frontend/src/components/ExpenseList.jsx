import { useEffect, useState } from "react";
import API from "../api/api";

const ExpenseList = ({ category, sort, refresh}) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await API.get(
        `/expenses?category=${category}&sort=${sort}`
      );
      setExpenses(data);
    };
    fetchExpenses();
  }, [category, sort, refresh]); // refetch when filter changes

  const total = expenses.reduce(
    (sum, e) => sum + Number(e.amount.$numberDecimal),
    0
  );


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
        {/* <tbody>
          <tr>
            <td colSpan="4" className="text-center py-4">
              No expenses yet
            </td>
          </tr>
        </tbody> */}
        <tbody>
          {expenses.map((e) => (
            <tr key={e._id}>
              <td>{Number(e.amount.$numberDecimal)}</td>
              <td>{e.category}</td>
              <td>{e.description}</td>
              <td>{new Date(e.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 font-semibold">
        Total: ₹{total}
      </div>

    </div>
  );
};

export default ExpenseList;
