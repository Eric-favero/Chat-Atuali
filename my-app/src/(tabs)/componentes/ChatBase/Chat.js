import React from "react";
import ChatHeader from "./ChatHeader";
import * as C from "./ChatBaseCSS";
import Default from "./Default";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;

  return (
    <C.ContainerChat>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.ContainerChat>
  );
};

export default Chat;