import "./Expenses.css";
import React, { useState } from 'react';
import Card from "../components/UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {



  const [enteredYear, setEnteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setEnteredYear(selectedYear);

  }
  console.log();
  const filteredExpense = props.items.filter(expense => {
    return String(expense.date.getFullYear()) === enteredYear;
  })



  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter onEnteredYear={enteredYear}
          onSelectedYear={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpense} />

        <ExpensesList items={filteredExpense} />




      </Card>
    </div>
  );
}
export default Expenses;
