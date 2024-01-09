import React from "react";
import "./job-order-details-modal-content.css";
/**
 * demand:
 * {
    "date": "12.12.2020 12:12",
    "demandId": "123456",
    "state": "Çözüldü",
    "jobOrders": [
        {
            "date": "12.12.2020 12:12",
            "relatedTeam": "Elektronik",
            "teamMemberIdsThatWorked": [
                "123456",
                "123456",
                "123456"
            ],
            "materialsThatUsed": [
                "Motor yedek parça",
                "Yağ Pompası",
                "Vida"
            ],
            "externalServicesThatUsed": [],
            "description": "Bakım talebi açıklaması",
            "constructionEquipmentsThatUsed": [
                "Kazıcı Yükleyici",
                "Greyder"
            ]
        },
        {
            "date": "12.12.2020 12:12",
            "relatedTeam": "Makine",
            "teamMemberIdsThatWorked": [
                "123456",
                "123456",
                "123456"
            ],
            "materialsThatUsed": [
                "Motor yedek parça",
                "Yağ Pompası",
                "Vida"
            ],
            "externalServicesThatUsed": [],
            "description": "Bakım talebi açıklaması",
            "constructionEquipmentsThatUsed": [
                "Kazıcı Yükleyici",
                "Greyder"
            ]
        },
        {
            "date": "12.12.2020 12:12",
            "relatedTeam": "İnşaat",
            "teamMemberIdsThatWorked": [
                "123456",
                "123456",
                "123456"
            ],
            "materialsThatUsed": [
                "Çelik",
                "Çimento",
                "Kum"
            ],
            "externalServicesThatUsed": [],
            "describtion": "Bakım talebi açıklaması",
            "constructionEquipmentsThatUsed": [
                "Kazıcı Yükleyici",
                "Greyder"
            ]
        }
    ]
}
 * 
 * jobOrder:
 * {
    "date": "12.12.2020 12:12",
    "relatedTeam": "Elektronik",
    "teamMemberIdsThatWorked": [
        "123456",
        "123456",
        "123456"
    ],
    "materialsThatUsed": [
        "Motor yedek parça",
        "Yağ Pompası",
        "Vida"
    ],
    "externalServicesThatUsed": [],
    "description": "Bakım talebi açıklaması",
    "constructionEquipmentsThatUsed": [
        "Kazıcı Yükleyici",
        "Greyder"
    ]
}
 */

function JobOrderDetailsModalContent({ jobOrder, demand }) {
  console.log(demand);
  return (
    <div className="job-order-details-modal-content">
      <div className="job-order-details-modal-content-left">
        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">Tarih:</p>

          <p className="job-order-details-detail__data">{jobOrder.date}</p>
        </div>

        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">Bakım Ekibi</p>

          <p className="job-order-details-detail__data job-order-details-detail__data--related-team">
            {jobOrder.relatedTeam}
          </p>
        </div>

        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">Bakım Ekibi Üyeleri</p>

          <p className="job-order-details-detail__data">
            {jobOrder.teamMemberIdsThatWorked.length > 0
              ? jobOrder.teamMemberIdsThatWorked.join(", ")
              : "-"}
          </p>
        </div>

        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">Açıklama</p>

          <p className="job-order-details-detail__data">
            {jobOrder.description ? jobOrder.description : "-"}
          </p>
        </div>
      </div>

      <div className="job-order-details-modal-content-right">
        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">
            Kullanılan Malzemeler
          </p>

          <p className="job-order-details-detail__data">
            {jobOrder.materialsThatUsed.length > 0
              ? jobOrder.materialsThatUsed.join(", ")
              : "-"}
          </p>
        </div>

        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">
            Kullanılan İş Makineleri
          </p>

          <p className="job-order-details-detail__data">
            {jobOrder.constructionEquipmentsThatUsed.length > 0
              ? jobOrder.constructionEquipmentsThatUsed.join(", ")
              : "-"}
          </p>
        </div>

        <div className="job-order-details-detail">
          <p className="job-order-details-detail__title">Dış Servis</p>

          <p className="job-order-details-detail__data">
            {jobOrder.externalServicesThatUsed.length > 0
              ? jobOrder.externalServicesThatUsed.join(", ")
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobOrderDetailsModalContent;
