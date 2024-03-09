import { useState } from "react";

function AddAccountForm({ account, setAccount }) {
  const [currentAccount, setCurrentAccount] = useState({ ...account });

  const updateAccount = (e) => {
    if (e.target.name === "accountType") {
      setCurrentAccount(() => {
        const acc = { ...currentAccount, type: e.target.value };
        setAccount({ ...acc });
        return acc;
      });
    }
    if (e.target.name === "accountName") {
      setCurrentAccount(() => {
        const acc = { ...currentAccount, name: e.target.value };
        setAccount({ ...acc });
        return acc;
      });
    }
  };
  return (
    <form>
      <label>Account Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter account name"
        value={currentAccount.name}
        name="accountName"
        onChange={updateAccount}
      />
      <label>Select account type</label>
      <select
        className="form-control"
        value={currentAccount.type}
        onChange={updateAccount}
        name="accountType"
      >
        <option value={"regular"}>Regular</option>
        <option value={"checking"}>Checking</option>
        <option value={"interest"}>Interest</option>
      </select>
    </form>
  );
}

export default AddAccountForm;
