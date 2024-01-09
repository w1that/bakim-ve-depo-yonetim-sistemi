import React from "react";
import "./header.css";
import LogoImage from "../../assets/logo.png";
import { useAppContext } from "../../core/context/appContext";

import UserIcon from "../../assets/user.png";

function Header() {
  const { state } = useAppContext();

  return (
    <div className="header">
      <div className="header__title-container">
      <img src={LogoImage} alt="Logo"  className="header__logo" />

      <p className="header__title">Bakım Takip Sistemi</p>
      </div>

      {state.user && (
        <div className="header__content">
          <img src={UserIcon} alt="User" className="header__content__user" />
          
          <p className="header__content__userid">{state.user.id}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
