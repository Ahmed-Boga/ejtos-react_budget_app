import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  console.log(currency);
  const handleBudgetChange = (event) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    if (event.target.value > 20000) {
      alert("The value cannot exceed remaining funds  £" + event.target.value);
      //   setCost("");
      return;
    } else if (totalExpenses > event.target.value) {
      console.log(event.target.value, totalExpenses);
      alert("You cannot reduce the budget value lower than the spending");
      //   setCost("");
      return;
    }

    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        {budget}
      </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
