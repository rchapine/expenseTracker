import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className="minius">
      {transaction.text} <span>-400</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
