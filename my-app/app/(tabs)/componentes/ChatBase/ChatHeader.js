import React from "react";
import * as C from "./ChatBaseCSS";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";




const ChatHeader = ({ photoURL, name }) => {
  function ConfigChatHeader(){
    alert('funcionando')
  }

  return (
    <C.ContainerChatHeader>
      <C.UserInfoChatHeader>
        {photoURL ? <C.AvatarChatHeader src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContentChatHeader>
          <C.Name>{name}</C.Name>
        </C.NameContentChatHeader>
      </C.UserInfoChatHeader>
      <C.OptionsChatHeader>
        <MdMoreVert onClick={ConfigChatHeader} />
      </C.OptionsChatHeader>
    </C.ContainerChatHeader>
  );
};

export default ChatHeader;