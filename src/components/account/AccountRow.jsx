import React from "react";
import Button from "../Button";

const AccountRow = ({ account }) => {
  console.log(account);
  return (
    <tr>
      <th scope="row">{account.id}</th>
      <td>{account.name}</td>
      <td>{account.acctNumber}</td>
      <td>{account.balance}</td>
      <td className="d-flex justify-content-center">
        <Button text={"Withdraw"} />

        <Button text={"Deposit"} />
      </td>
    </tr>
  );
};

export default AccountRow;
