import "./Expenses.css";
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../components/UI/Card";
import ExpensesFilter from "./ExpenseFilter";

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

        {filteredExpense.map(expe => <ExpenseItem
          key={expe.id}
          title={expe.title}
          amount={expe.amount}
          date={expe.date} />)}



      </Card>
    </div>
  );
}
export default Expenses;
