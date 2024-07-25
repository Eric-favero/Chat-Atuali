import React from "react";
import * as C from "./ChatBaseCSS";
import SidebarHeader from "./SidebarHeader";
import SidebarChats from "./SidebarChats";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Sidebar>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Sidebar>
  );
};

export default Sidebar;