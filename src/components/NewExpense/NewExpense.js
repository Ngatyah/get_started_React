import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };

    props.onAddExpense(expenseData);
  };

  const checkButtonState = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={checkButtonState}>Add New Expense</button>}
      {isEditing && <ExpenseForm onstopEditing={stopEditingHandler}
        onSaveExpenseData={saveExpenseDataHandler} />}


    </div>
  );
};
export default NewExpense;
