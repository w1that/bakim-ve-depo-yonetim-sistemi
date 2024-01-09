import React, { useState } from "react";
import "./machine-info-modal-content.css";
import Select from "../../../../../../../components/select/Select";

const machineOptions = [
  "İş Makinesi 1",
  "İş Makinesi 2",
  "İş Makinesi 3",
  "İş Makinesi 4",
];

function MachineInfoModalContent() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="fault-info-modal-content">
      <p className="fault-info-modal-content__title">
        Kullanılan İş Makinesini Gir
      </p>

      <label
        className="fault-info-modal-content__label"
        htmlFor="fault-info-modal-content__input"
      >
        İş Makinesi Seç
      </label>
      <Select
        options={machineOptions}
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

export default MachineInfoModalContent;
