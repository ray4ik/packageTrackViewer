// React core
import React from "react";

// Media assets
import logoWeDeliver from "../../assets/img/LogoWeDeliver.png";

export default function Header() {
  // Render
  return (
    <header className={"header"}>
      {/* Replace with Link later */}
      <a href="#">
         <img src={logoWeDeliver} alt="Logo" />
      </a>
    </header>
  );
}