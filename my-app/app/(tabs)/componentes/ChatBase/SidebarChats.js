import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.config";
import * as C from "./ChatBaseCSS";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "./SidebarChatsItem";

const SidebarChats = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);

  return (
    <C.SidebarChats>
      {chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          <C.Divider />
        </C.Content>
      ))}
    </C.SidebarChats>
  );
};

export default SidebarChats;