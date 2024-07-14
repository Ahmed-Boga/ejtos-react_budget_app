import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { dispatch, expenses, currency } = useContext(AppContext);
  const [newcurrency, setCurrency] = useState(currency);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="row">
      <div className="input-group mb-3">
        <div className="alert alert-primary">
          <span>
            Spent so far: {newcurrency}
            {totalExpenses}
          </span>
        </div>
        <label
          className="alert alert-success"
          htmlFor="inputGroupSelect01"
          style={{ marginLeft: "2rem" }}
        >
          Currency
          <select
            value={newcurrency}
            className="custom-select "
            id="inputGroupSelect01"
            onChange={(event) => {
              setCurrency(event.target.value);
              dispatch({
                type: "CHG_CURRENCY",
                payload: event.target.value,
              });
            }}
          >
            <option
              value="$"
              className={newcurrency === "$" ? "--bs-success" : ""}
              style={newcurrency === "$" ? { color: "green" } : {color: "white"}}
              name="Dollar"
            >
              {/* {" "} */}$ Dollar
            </option>
            <option
              defaultValue
              value="£"
              className={
                newcurrency !== "£" ? "" : "--bs-success-text-emphasis"
              }
              // style={newcurrency !== "£" ? { color: "green" } : {}}
              name="Pound"
            >
              £ Pound
            </option>
            <option
              value="€"
              style={newcurrency !== "€" ? { color: "green" } : {}}
              name="Euro"
            >
              € Euro
            </option>
            <option
              value="₹"
              style={newcurrency !== "₹" ? { color: "green" } : {}}
              name="Ruppee"
            >
              ₹ Ruppee
            </option>
          </select>
        </label>
      </div>
    </div>
  );
};
export default ExpenseTotal;
