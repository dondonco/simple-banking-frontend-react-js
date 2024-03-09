import React from "react";

function Button({ id, text, eventHandler, btnStyle }) {
  const handler = () => {
    eventHandler(id);
  };
  return (
    <div>
      <button className={btnStyle} onClick={handler}>
        {text}
      </button>
    </div>
  );
}

export default Button;
