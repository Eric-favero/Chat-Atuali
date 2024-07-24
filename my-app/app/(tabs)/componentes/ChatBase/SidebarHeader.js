import React from "react";
import * as C from "./ChatBaseCSS";
import {MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const SidebarHeader = ({ setUserChat }) => {
  
  const checkEmailExists = async (emailInput) => {
    const db = getFirestore();
    const infoCollection = collection(db, 'informations');
    const q = query(infoCollection, where('email', '==', emailInput));

    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };


  const [user] = useAuthState(auth);
  const refChat = db

    .collection("chats")
    .where("users", "array-contains", user.email,)
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = async() => {
    const emailInput = prompt("Insert an e-mail to start a Chat!");
    const emailExists = await checkEmailExists(emailInput);

      if (!emailInput) return;



          if (!EmailValidator.validate(emailInput)) {
            return alert("Invalid E-mail!");
          } else if (emailInput === user.email) {
            return alert("Insert a diferent E-mail than the logged one!");
          } else if (chatExists(emailInput)) {
            return alert("Chat already exists");}
            else if (emailExists === false)
              return alert('Nao existe')
            
            

            db.collection("chats").add({
              users: [user.email, emailInput],
          });}

  
   
  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };
  const IconProfile= () => {
    return alert('funcionando')
  }

  return (
    <C.SidebarHeader>
      <C.AvatarHeader
        src={user?.photoURL}
      />
      <C.OptionsHeader>
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert onClick={IconProfile}/>
      </C.OptionsHeader>
    </C.SidebarHeader>
  );
};

export default SidebarHeader;