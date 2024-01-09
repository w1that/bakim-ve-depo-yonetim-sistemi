import React from "react";
import "./demands-list-item.css";

import ExpandIcon from "../../../../../../assets/expand.png";
import { useModal } from "../../../../../../components/modal/modalContext";
import DemandDetailsModalContent from "./components/DemandDetailsModalContent/DemandDetailsModalContent";

/**{
    date: "12.12.2020 12:12",
    demandId: "123456",
    state: "Çözüldü",
    jobOrders: [
      {
        relatedTeam: "Elektronik",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Motor yedek parça", "Yağ Pompası", "Vida"],
        externalServicesThatUsed: [],
        description: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
      {
        relatedTeam: "Makine",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Motor yedek parça", "Yağ Pompası", "Vida"],
        externalServicesThatUsed: [],
        description: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
      {
        relatedTeam: "İnşaat",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Çelik", "Çimento", "Kum"],
        externalServicesThatUsed: [],
        describtion: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
    ],
  }, */

function DemandsListItem({ demand }) {
  const { dispatch } = useModal();

  function showDemandDetails() {
    // OPEN_MODAL
    dispatch({
      type: "OPEN_MODAL",
      payload: <DemandDetailsModalContent demand={demand} />,
    });
  }

  return (
    <div className="demands-list-item">
      <button
        onClick={showDemandDetails}
        className="demands-list-item__expand-button"
      >
        Detayları Gör
        <img src={ExpandIcon} alt="expand-icon" />
      </button>

      <div className="demands-list-item__demand-info-container">
        <p className="demands-list-item__demand-info-row">
          <span className="demands-list-item__demand-info-row__title">
            Talep Oluşturma Tarihi:
          </span>

          {demand.date}
        </p>

        <p className="demands-list-item__demand-info-row">
          <span className="demands-list-item__demand-info-row__title">
            Talep No:
          </span>

          {demand.demandId}
        </p>

        <p className="demands-list-item__demand-info-row">
          <span className="demands-list-item__demand-info-row__title">
            Talep Durumu:
          </span>
          <div className="demands-list-item__demand-info-row__state">
            {demand.state}
          </div>
        </p>
      </div>

      <div className="demands-list-item__confirmation-container">
        <button className="demands-list-item__confirmation-button demands-list-item__confirmation-button--confirm">
          Onayla
        </button>

        <button className="demands-list-item__confirmation-button demands-list-item__confirmation-button--reject">
          Reddet
        </button>
      </div>
    </div>
  );
}

export default DemandsListItem;
