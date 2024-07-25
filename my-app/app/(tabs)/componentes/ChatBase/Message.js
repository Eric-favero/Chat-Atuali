import React from "react";
import * as C from "./ChatBaseCSS";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <C.ContainerMessage>
      <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <C.ContentMessage>
          <C.Message>{message.message}</C.Message>
          <C.MessageDate>
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageDate>
        </C.ContentMessage>
      </C.Line>
    </C.ContainerMessage>
  );
};

export default Message;