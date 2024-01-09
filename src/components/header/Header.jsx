import React from "react";
import "./header.css";
import LogoImage from "../../assets/logo.png";
import { useAppContext } from "../../core/context/appContext";

import UserIcon from "../../assets/user.png";
import ExportIcon from "../../assets/export.png";

function Header() {
  const { state } = useAppContext();

  function exportDemands(){
    fetch("https://localhost:7036/all-demands/export-xml")
    .then((res) => 
    // it has response body
    res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "talepler.xml";
      a.click();
    }) 
  }

  return (
    <div className="header">
      <div className="header__title-container">
      <img src={LogoImage} alt="Logo"  className="header__logo" />

      <p className="header__title">Bakım Takip Sistemi</p>
      </div>

      {state.user && (
        <div className="header__content">
          <button onClick={exportDemands} className="header__content__export-button">Talepleri Dışa Aktar
          <img src={ExportIcon} alt="Export" className="header__content__export-icon" />
          </button>
          <img src={UserIcon} alt="User" className="header__content__user" />
          
          <p className="header__content__userid">{state.user.id}</p>
        </div>
      )}
    </div>
  );
}

export default Header;
