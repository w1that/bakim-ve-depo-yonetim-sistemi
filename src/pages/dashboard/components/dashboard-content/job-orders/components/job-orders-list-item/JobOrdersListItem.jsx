import React from "react";
import "./job-orders-list-item.css";
import { useModal } from "../../../../../../../components/modal/modalContext";
import FaultInfoModalContent from "../fault-info-modal-content/FaultInfoModalContent";
import EquipmentInfoModalContent from "../equipment-info-modal-content/EquipmentInfoModalContent";
import ServiceInfoModalContent from "../service-info-modal-content/ServiceInfoModalContent";
import MachineInfoModalContent from "../machine-info-modal-content/MachineInfoModalContent";

import FailureIcon from "../../../../../../../assets/failure.png";
import ServiceIcon from "../../../../../../../assets/service.png";
import ToolsIcon from "../../../../../../../assets/tools.png";
import ForkliftIcon from "../../../../../../../assets/forklift.png";

function JobOrdersListItem({ item }) {
  const { dispatch } = useModal();

  const handleAddInfo = (type) => {
    switch (type) {
      case "fault":
        dispatch({ type: "OPEN_MODAL", payload: <FaultInfoModalContent /> });
        break;
      case "material":
        dispatch({
          type: "OPEN_MODAL",
          payload: <EquipmentInfoModalContent />,
        });
        break;
      case "machine":
        dispatch({ type: "OPEN_MODAL", payload: <MachineInfoModalContent /> });
        break;
      case "service":
        dispatch({ type: "OPEN_MODAL", payload: <ServiceInfoModalContent /> });
        break;
      default:
        break;
    }
  };

  return (
    <div className="job-orders-list-item">
      <div className="job-orders-list-item__title-container">
        <div className="job-orders-list-item__title">
          Emir Oluşturulma Tarihi
        </div>
        <div className="job-orders-list-item__title-container__content">
          {item.date}
        </div>
      </div>

      <div className="job-orders-list-item__title-container">
        <div className="job-orders-list-item__title">İş Emri No</div>
        <div className="job-orders-list-item__title-container__content">
          {item.no}
        </div>
      </div>

      <div className="job-orders-list-item__title-container">
        <div className="job-orders-list-item__title">İş Emri</div>
        <div className="job-orders-list-item__title-container__content">
          {item.jobOrderTitle}
        </div>
      </div>

      <div className="job-orders-list-item__actions">
        <button
          onClick={() => handleAddInfo("fault")}
          className="job-orders-list-item__actions__button job-orders-list-item__actions__button--red"
        >
          <img
            className="job-orders-list-item__actions__button__icon"
            src={FailureIcon}
            alt="failure"
          />
          Arıza Bilgisi Gir
        </button>

        <button
          onClick={() => handleAddInfo("material")}
          className="job-orders-list-item__actions__button job-orders-list-item__actions__button--yellow"
        >
          <img
            className="job-orders-list-item__actions__button__icon"
            src={ToolsIcon}
            alt="tools"
          />
          Malzeme Gir
        </button>

        <button
          onClick={() => handleAddInfo("machine")}
          className="job-orders-list-item__actions__button job-orders-list-item__actions__button--blue"
        >
          <img
            className="job-orders-list-item__actions__button__icon"
            src={ForkliftIcon}
            alt="forklift"
          />
          İş Makinesi Seç
        </button>

        <button
          onClick={() => handleAddInfo("service")}
          className="job-orders-list-item__actions__button job-orders-list-item__actions__button--green"
        >
          <img
            className="job-orders-list-item__actions__button__icon"
            src={ServiceIcon}
            alt="service"
          />
          Dış Servis Firması Seç
        </button>
      </div>

      <div className="job-orders-list-item__description">
        <textarea
          className="job-orders-list-item__description__textarea"
          placeholder="Açıklama Giriniz..."
          rows="4"
          cols="50"
        ></textarea>
      </div>

      <button className="job-orders-list-item__save-button">
        Tamamlandı Olarak İşaretle
      </button>
    </div>
  );
}

export default JobOrdersListItem;
