import React, { useState } from "react";
import "./equipment-info-modal-content.css";
import Select from "../../../../../../../components/select/Select";

const materialOptions = ["Malzeme 1", "Malzeme 2", "Malzeme 3", "Malzeme 4"];

function EquipmentInfoModalContent() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="fault-info-modal-content">
      <p className="fault-info-modal-content__title">
        Kullanılan Malzemeyi Gir
      </p>

      <label
        className="fault-info-modal-content__label"
        htmlFor="fault-info-modal-content__input"
      >
        Malzemeyi Seç
      </label>
      <Select
        options={materialOptions}
        value={selectedOption}
        onChange={setSelectedOption}
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

export default EquipmentInfoModalContent;
