import React, { useEffect, useRef } from "react";
import { db } from "../../firebase.config";
import * as C from "./ChatBaseCSS";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

const ChatBody = ({ chatId }) => {
  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef("");

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  return (
    <C.ContainerChatBody ref={refBody}>
      {messagesRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </C.ContainerChatBody>
  );
};

export default ChatBody;