import { useEffect, useRef, useState } from "react";
import AddAccountForm from "./AddAccountForm";

function AddAccountModal({ title, save, cancel, saveAccount, children }) {
  // const closeRef = useRef();

  const handlerSave = () => {
    // saveAccount();
    // closeRef.current.close();
    saveAccount();
    console.log("Closing modal");
  };

  return (
    <div
      className="modal fade"
      id="myModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-primary"
              id="staticBackdropLabel"
            >
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handlerSave}
            >
              {save}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccountModal;
