import React from "react";

const AccountRow = ({ account }) => {
  console.log(account);
  return (
    <tr>
      <td>{account.id}</td>
      <td>{account.name}</td>
      <td>{account.acctNumber}</td>
      <td>{account.balance}</td>
    </tr>
  );
};

export default AccountRow;
