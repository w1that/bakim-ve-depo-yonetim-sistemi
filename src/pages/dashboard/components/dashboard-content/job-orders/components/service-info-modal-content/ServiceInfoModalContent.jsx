import React, { useState } from 'react'
import "./service-info-modal-content.css";
import Select from '../../../../../../../components/select/Select';

const serviceOptions = ["Servis 1", "Servis 2", "Servis 3", "Servis 4"];

function ServiceInfoModalContent() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="fault-info-modal-content">
      <p className="fault-info-modal-content__title">
        Dış Servis Firması
      </p>

      <label
        className="fault-info-modal-content__label"
        htmlFor="fault-info-modal-content__input"
      >
        Servis Seç
      </label>
      <Select
        options={serviceOptions}
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

export default ServiceInfoModalContent