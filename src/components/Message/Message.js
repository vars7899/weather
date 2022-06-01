import React from "react";

const Message = ({ children }) => {
  return (
    <div className="message">
      <p>{children}</p>
    </div>
  );
};

export default Message;
