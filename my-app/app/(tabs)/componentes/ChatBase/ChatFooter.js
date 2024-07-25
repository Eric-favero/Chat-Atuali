import React, { useState } from "react";
import * as C from "./ChatBaseCSS";
import { auth, db } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import { VscSend } from "react-icons/vsc";


const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim()){
      setMessage("")
      db.collection("chats").doc(chatId).collection("messages").add({
        message: message,
        user: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
      });
      
      return;}
  };

  return (
    <C.ContainerChatFooter>
      <C.FormChatFooter onSubmit={handleSendMessage}>
        <C.InputChatFooter
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <VscSend onClick={handleSendMessage} />
      </C.FormChatFooter>
    </C.ContainerChatFooter>
  );
};

export default ChatFooter;