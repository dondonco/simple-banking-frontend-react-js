import React from "react";
import Button from "../Button";

const AccountRow = ({ account }) => {
  console.log(account);

  const handlerWithdraw = (id) => {
    console.log("Withdraw", id);
  };
  const handlerDeposit = (id) => {
    console.log("Deposit", id);
  };
  const handlerUpdateAccount = (id) => {
    console.log("Update", id);
  };
  const handlerDeleteAccount = (id) => {
    console.log("Delete", id);
  };
  return (
    <tr>
      <th scope="row">{account.id}</th>
      <td>{account.name}</td>
      <td>{account.acctNumber}</td>
      <td className="d-flex justify-content-center">
        <Button
          id={account.id}
          btnStyle={"btn btn-warning m-1"}
          text={"Update"}
          eventHandler={handlerUpdateAccount}
        />
        <Button
          id={account.id}
          btnStyle={"btn btn-danger m-1"}
          text={"Delete"}
          eventHandler={handlerDeleteAccount}
        />
      </td>
      <td>{account.balance}</td>
      <td className="d-flex justify-content-center">
        <Button
          id={account.id}
          btnStyle={"btn btn-success m-1"}
          text={"Withdraw"}
          eventHandler={handlerWithdraw}
        />
        <Button
          id={account.id}
          btnStyle={"btn btn-success m-1"}
          text={"Deposit"}
          eventHandler={handlerDeposit}
        />
      </td>
    </tr>
  );
};

export default AccountRow;
