import React from "react";
import perfil from "../assets/perfil.png";
function MainHeader() {
  return (
    <header>
      <strong id="title">Facebook.</strong>
      <div id="menutitle">
        <strong>Meu perfil</strong>
        <img src={perfil} alt="" height="30" />
      </div>
    </header>
  );
}

export default MainHeader;
