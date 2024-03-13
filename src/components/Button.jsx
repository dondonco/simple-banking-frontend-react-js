import React from "react";

function Button({ id, text, eventHandler, btnStyle }) {
  const handler = () => {
    eventHandler(id);
  };
  return (
    <div className={btnStyle} onClick={handler}>
      {text}
    </div>
  );
}

export default Button;
