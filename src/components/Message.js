import React from "react";

const Message = ({ message, onClick, deleteHandler }) => {
  const { subject, content, isRead } = message;
  return (
    <div className="message">
      <div className="avatar">
        <i className="fa fa-fw fa-user"></i>
      </div>
      <div className="content" onClick={onClick}>
        <h2
          style={{
            fontWeight: isRead === false ? "bold" : "normal",
            color: isRead === false ? "#333" : "#111",
          }}
        >
          {subject}
        </h2>
        <p
          style={{
            fontWeight: isRead === false ? "bold" : "normal",
            color: isRead === false ? "#333" : "#111",
          }}
        >
          {content}
        </p>
      </div>
      <div className="delete" onClick ={deleteHandler}>
        <i className="fa fa-fw fa-trash"></i>
      </div>
    </div>
  );
};

export default Message;
