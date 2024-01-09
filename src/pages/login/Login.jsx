import React, { useEffect, useState } from "react";
import "./login.css";

import GoogleIcon from "../../assets/google.png";
import AdminIcon from "../../assets/admin.png";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../core/context/appContext";
import Select from "../../components/select/Select";

function Login() {
  const [activeOption, setActiveOption] = useState("depo-elemani");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [value, setvalue] = useState("12");

  function handleSignIn() {
    dispatch({
      type: "LOGIN",
      payload: {
        id: "1725123",
        role: "bakim-ekibi-elemani",
      },
    });

    navigate("/dashboard");
  }

  function handleChangeOption(option) {
    setActiveOption(option);
  }

  return (
    <div className="login">
      <div className="login__container">
        <p className="login__title">Giriş Yap</p>

        <div className="login__login-option-selector">
          <button
            onClick={() => handleChangeOption("depo-elemani")}
            className={`login__login-option-selector__button ${
              activeOption === "depo-elemani"
                ? "login__login-option-selector__button--active"
                : ""
            }`}
          >
            Depo Çalışanı
          </button>

          <button
            onClick={() => handleChangeOption("bakim-ekibi")}
            className={`login__login-option-selector__button ${
              activeOption === "bakim-ekibi"
                ? "login__login-option-selector__button--active"
                : ""
            }`}
          >
            Bakım Ekibi Üyesi
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="login__form">
          <div className="login__form__input-container">
            <label
              className="login__form__input-container__label"
              htmlFor="username"
            >
              Kullanıcı Adı
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="login__form__input"
              type="text"
              placeholder="Kullanıcı Adı"
            />
          </div>

          <div className="login__form__input-container">
            <label
              className="login__form__input-container__label"
              htmlFor="password"
            >
              Şifre
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="login__form__input"
              type="password"
              placeholder="Şifre"
            />
          </div>

          <button
            onClick={handleSignIn}
            type="button"
            className="login__form__button"
          >
            Giriş Yap
          </button>
        </form>

        <button className="login__google-button">
          <img
            src={GoogleIcon}
            alt="Google Icon"
            className="login__google-button__icon"
          />

          <p className="login__google-button__text">Google ile Giriş Yap</p>
        </button>

        <div className="divider" />

        <button className="login__admin-button">
          <img
            src={AdminIcon}
            alt="Admin Icon"
            className="login__admin-button__icon"
          />

          <p className="login__admin-button__text">Sistem Girişi</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
