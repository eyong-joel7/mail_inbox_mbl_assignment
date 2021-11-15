import React, { useEffect } from "react";
import { connect } from "react-redux";
import Hero from "../components/Hero";
import {useNavigate} from 'react-router-dom'
;

function HomePage(props) {
const {numMessages, numUnread, user} = props;
const history = useNavigate()
useEffect(() => {
if(!user){
  history('/login')
}
},[history, user])
  return (
    <>
      <Hero numMessages = {numMessages} numUnread = {numUnread} />
    </>
  );
}
function mapStateToProps({ messages, users }) {
  const { messages: inboxMessages } = messages;
  const unRead = inboxMessages && inboxMessages.filter(message => message.isRead !== true)
  return {
    numMessages: inboxMessages? inboxMessages.length : 0,
    numUnread: unRead?.length,
    user: users.user || localStorage.getItem('MBL_USER_INFO')? JSON.parse(localStorage.getItem('MBL_USER_INFO')) : null,
  };
}
export default connect(mapStateToProps)(HomePage);
