import React from "react";
import { NavLink } from "react-router-dom";
import AllChats from "./AllChats";
import ChatOption from "./ChatOption";
import Conversation from "./Conversation";

import "./dashboardChat.css";

function DashboardChat() {
  return (
    <div className="dashboard-chat">
      <div className="warning flex-between">
        <div className="flex">
          <span className="material-icons-outlined">report_gmailerrorred</span>
          Conversation Lasts 24 Hours / 30 Days
        </div>
        <span className="material-icons-outlined">close</span>
      </div>
      <div className="navigation flex">
        <NavLink to="/" style={{ color: "var(--second-blue-color)" }}>
          Dashboard
        </NavLink>
        <i className="fa-solid fa-angle-right"></i>
        <span>Chat</span>
      </div>
      <div className="chats">
        <ChatOption />
        <Conversation />
        <AllChats />
      </div>
    </div>
  );
}

export default DashboardChat;
