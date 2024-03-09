import { useState } from "react";
import Button from "../Button";
import AddAccountModal from "./AddAccountModal";
import AddAccountForm from "./AddAccountForm";

function AddAccount() {
  const [account, setAccount] = useState({ name: "", type: "regular" });

  const saveAccount = () => {
    console.log(account);
    console.log("Save account");
  };

  return (
    <div>
      {/* <Button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        text={"Create a new Account Modal"}
        eventHandler={handlerOpenModal}
      /> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Create a new Account
      </button>
      <AddAccountModal
        title={"Create account"}
        save={"Save"}
        cancel={"Close"}
        saveAccount={saveAccount}
      >
        <AddAccountForm account={account} setAccount={setAccount} />
      </AddAccountModal>
    </div>
  );
}

export default AddAccount;
