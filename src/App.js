/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MessageDetail from "./pages/MessageDetail";
import Messages from "./pages/Messages";
import { getAllMessages } from "./redux/actions";

function App(props) {
  useEffect(() => {
    props.dispatch(getAllMessages());
  }, []);
  return (
    <div className="App">
     
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/message/:id" element={<MessageDetail/>} />
          <Route path="/login" element={<Login/>} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default connect()(App);
