import React from "react";

const AccountRow = ({ account }) => {
  console.log(account);
  return (
    <tr>
      <th scope="row">{account.id}</th>
      <td>{account.name}</td>
      <td>{account.acctNumber}</td>
      <td>{account.balance}</td>
    </tr>
  );
};

export default AccountRow;
