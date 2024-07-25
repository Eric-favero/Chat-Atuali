import React from "react";
import * as C from "./ChatBaseCSS";
import { BsChatSquareDots } from "react-icons/bs";

const Default = () => {
  return (
    <C.ContainerDefault>
      <BsChatSquareDots />
      <C.Title>Chat Valencia</C.Title>
      <C.Info>
        <p>Welcome to a new way to Chat! 👋</p>
        <p>From Valencia/Spain to the World! 🤩 </p>
      </C.Info>
    </C.ContainerDefault>
  );
};

export default Default; 