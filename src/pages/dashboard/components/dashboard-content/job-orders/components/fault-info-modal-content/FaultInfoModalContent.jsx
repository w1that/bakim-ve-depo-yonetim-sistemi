import React from "react";
import "./fault-info-modal-content.css";
import { useState } from "react";

function FaultInfoModalContent() {
  const [text, setText] = useState("");

  return (
    <div className="fault-info-modal-content">
      <p className="fault-info-modal-content__title">Arıza Bilgisi Gir</p>

      <label
        className="fault-info-modal-content__label"
        htmlFor="fault-info-modal-content__input"
      >
        Arıza Bilgisi
      </label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Arıza bilgisi giriniz..."
        className="fault-info-modal-content__input"
        id="fault-info-modal-content__input"
      />

      <div className="fault-info-modal-content__buttons">
        <button className="fault-info-modal-content__buttons__button fault-info-modal-content__buttons__button--red">
          Vazgeç
        </button>

        <button className="fault-info-modal-content__buttons__button fault-info-modal-content__buttons__button--green">
          Kaydet
        </button>
      </div>
    </div>
  );
}

export default FaultInfoModalContent;
