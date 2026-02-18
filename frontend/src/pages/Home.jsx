import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import FilterBar from "../components/FilterBar";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 space-y-6">
      <ExpenseForm />
      <FilterBar />
      <ExpenseList />
    </div>
  );
};

export default Home;
