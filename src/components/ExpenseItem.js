import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";
import Card from "../components/UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDescription items={props.title} />

      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
