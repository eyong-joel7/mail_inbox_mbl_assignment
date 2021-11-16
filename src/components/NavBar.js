import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/authedUser";

const NavBar = ({ inboxMessages, user, dispatch }) => {
  let numUnread = 0;

  if (Array.isArray(inboxMessages) && inboxMessages.length>0) {
    const unRead = inboxMessages.filter((message) => message.isRead !== true);
    numUnread = unRead?.length;
  }
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <h1>MI</h1>
      </Link>
      {user ? (
        <div>
          <ul className="user">
            <li>
              <span>Hi, {user?.name}</span>
              <i className="fa fa-fw fa-user"></i>
            </li>
            <li>
              <Link to="/messages">
                <i className="fa fa-fw fa-envelope"></i>
              </Link>
              <span>{numUnread}</span>
            </li>
            <li onClick = {() => dispatch(logOut())}>
            <i className="fa fa-fw fa-sign-out"></i>
            </li>
          </ul>
        </div>
      ) : <Link to='/login'  className ='btn login'>Login</Link>}
    </nav>
  );
};

function mapStateToProps({ messages, users }) {
  const { messages: inboxMessages } = messages;
  return {
    inboxMessages,
    user: users.user || JSON.parse(localStorage.getItem('MBL_USER_INFO')),
  };
}
export default connect(mapStateToProps)(NavBar);
