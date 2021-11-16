import React, { useEffect } from "react";
import { connect } from "react-redux";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import { deleteMessage } from "../redux/actions";

const Messages = (props) => {
  const { inboxMessages, user } = props;
  const history = useNavigate();

  useEffect(() => {
    if (!user) {
      history("/login");
    }
  }, [history, user]);

  const deleteHandler = (id) => {
    props.dispatch(deleteMessage(id));
  };
  return (
    <>
      <div className="container">
        <h1>Messages ({inboxMessages?.length})</h1>
        {inboxMessages?.length < 1 ? (
          <div className="no-messages">
            <h2>No Message</h2>
            <i className="fa empty fa-folder-open"></i>
            <p>Your messages will appear here</p>
          </div>
        ) : (
          <div className="wrapper">
            {inboxMessages &&
              inboxMessages.map((message) => (
                <Message
                  key={message._id}
                  message={message}
                  onClick={() => history(`/message/${message._id}`)}
                  deleteHandler={() => deleteHandler(message._id)}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

function mapStateToProps({ messages, users }) {
  const { messages: inboxMessages } = messages;
  const timeStampToUnix = (timeStamp) =>
    parseInt((new Date(timeStamp).getTime() / 1000).toFixed(0));
  return {
    inboxMessages: inboxMessages?.sort(
      (a, b) => timeStampToUnix(b.createdAt) - timeStampToUnix(a.createdAt)
    ),
    user: users.user || JSON.parse(localStorage.getItem('MBL_USER_INFO')),
  };
}
export default connect(mapStateToProps)(Messages);
