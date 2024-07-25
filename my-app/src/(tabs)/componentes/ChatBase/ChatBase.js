import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Sidebar from "./sidebar";
import * as C from "./ChatBaseCSS";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.config";


const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);


  return (
    <C.ContainerChatBase>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </C.ContainerChatBase>
  );
};

export default App;