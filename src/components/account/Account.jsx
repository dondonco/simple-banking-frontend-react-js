import React from "react";
import AccountRow from "./AccountRow";

function Account() {
  const accountList = [
    {
      type: "regular",
      id: 1,
      name: "Dondon Jeric Co",
      acctNumber: "6031102982761387",
      balance: 500.0,
      minimumBalance: 500.0,
      penalty: 10.0,
      transactionCharge: 0.0,
      interestCharge: 0.0,
    },
    {
      type: "regular",
      id: 2,
      name: "Dondon Jeric Co",
      acctNumber: "6907888863946490",
      balance: 500.0,
      minimumBalance: 500.0,
      penalty: 10.0,
      transactionCharge: 0.0,
      interestCharge: 0.0,
    },
    {
      type: "interest",
      id: 3,
      name: "Dondon Jeric",
      acctNumber: "4130103339356550",
      balance: 0.0,
      minimumBalance: 0.0,
      penalty: 0.0,
      transactionCharge: 0.0,
      interestCharge: 0.03,
    },
    {
      type: "checking",
      id: 4,
      name: "Dondon Co",
      acctNumber: "4588585697620149",
      balance: 100.0,
      minimumBalance: 100.0,
      penalty: 10.0,
      transactionCharge: 1.0,
      interestCharge: 0.0,
    },
    {
      type: "regular",
      id: 5,
      name: "Jeric Co",
      acctNumber: "8169191378233872",
      balance: 500.0,
      minimumBalance: 500.0,
      penalty: 10.0,
      transactionCharge: 0.0,
      interestCharge: 0.0,
    },
    {
      type: "regular",
      id: 6,
      name: "Dondon Jeric Co",
      acctNumber: "4410948714465656",
      balance: 500.0,
      minimumBalance: 500.0,
      penalty: 10.0,
      transactionCharge: 0.0,
      interestCharge: 0.0,
    },
    {
      type: "interest",
      id: 7,
      name: "Dondon Jeric",
      acctNumber: "8648156011138652",
      balance: 0.0,
      minimumBalance: 0.0,
      penalty: 0.0,
      transactionCharge: 0.0,
      interestCharge: 0.03,
    },
    {
      type: "checking",
      id: 8,
      name: "Dondon Co",
      acctNumber: "2612593146024868",
      balance: 100.0,
      minimumBalance: 100.0,
      penalty: 10.0,
      transactionCharge: 1.0,
      interestCharge: 0.0,
    },
    {
      type: "regular",
      id: 9,
      name: "Jeric Co",
      acctNumber: "6008003977102135",
      balance: 500.0,
      minimumBalance: 500.0,
      penalty: 10.0,
      transactionCharge: 0.0,
      interestCharge: 0.0,
    },
  ];
  console.log(accountList);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>acctNumber</th>
            <th>balance</th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((account) => (
            <AccountRow account={account} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Account;
