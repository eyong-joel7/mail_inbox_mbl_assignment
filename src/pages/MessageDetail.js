import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import {updateReadStatus} from '../redux/actions/index'

const MessageDetail = (props) => {
  const { inboxMessages,user } = props;
  const location = useLocation();
  const { pathname } = location;
  const id = pathname?.split("/")[2];
  const message = id && inboxMessages?.find((message) => message._id === id);
  const history = useNavigate()
  useEffect(() => {
    if(id && message?.isRead !==true){
      props.dispatch(updateReadStatus(id))
    }
    if(!user){
      history('/login')
    }
  },[history, id, message, props, user])

  
  if (!message)
    return (
      <div className="container">
        {" "}
        <div>No Message Match your Query</div>
      </div>
    );
    return (
      <>
        <div className="container">
          <h1>Message</h1>
          <div className="wrapper">
            {message && (
              <div className="details">
                <h2>{message.subject}</h2>
                <p>{message.content}</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
};

function mapStateToProps({ messages,users }) {
  const { messages: inboxMessages } = messages;
  return {
    inboxMessages,
    user: users.user || localStorage.getItem('MBL_USER_INFO')? JSON.parse(localStorage.getItem('MBL_USER_INFO')) : null,
  };
}
export default connect(mapStateToProps)(MessageDetail);
