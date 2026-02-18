import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("date_desc");
  const [refresh, setRefresh] = useState(false);  // to update expenselist when added

  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6">
      <ExpenseForm setRefresh={setRefresh}/>
      <FilterBar
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <ExpenseList
        category={category}
        sort={sort}
        refresh={refresh}
      />
    </div>
  );
};

export default Home;
