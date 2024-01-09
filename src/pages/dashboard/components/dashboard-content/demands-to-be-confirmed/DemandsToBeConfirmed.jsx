import React from 'react'
import './demands-to-be-confirmed.css'
import DemandsList from '../components/demands-list/DemandsList';

const demandsToBeConfirmed = [
  {
    date: "12.12.2020 12:12",
    demandId: "123456",
    state: "Çözüldü",
    jobOrders: [
      {
        date: "12.12.2020 12:12",
        relatedTeam: "Elektronik",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Motor yedek parça", "Yağ Pompası", "Vida"],
        externalServicesThatUsed: [],
        description: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
      {
        date: "12.12.2020 12:12",
        relatedTeam: "Makine",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Motor yedek parça", "Yağ Pompası", "Vida"],
        externalServicesThatUsed: [],
        description: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
      {
        date: "12.12.2020 12:12",
        relatedTeam: "İnşaat",
        teamMemberIdsThatWorked: ["123456", "123456", "123456"],
        materialsThatUsed: ["Çelik", "Çimento", "Kum"],
        externalServicesThatUsed: [],
        describtion: "Bakım talebi açıklaması",
        constructionEquipmentsThatUsed: ["Kazıcı Yükleyici", "Greyder"],
      },
    ],
  },
];

function DemandsToBeConfirmed() {
  
  return (
    <div className='demands-to-be-confirmed'>
      <DemandsList demands={demandsToBeConfirmed} />
    </div>
  )
}

export default DemandsToBeConfirmed