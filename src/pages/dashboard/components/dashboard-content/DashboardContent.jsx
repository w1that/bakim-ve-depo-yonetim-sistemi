import React from "react";
import "./dashboard-content.css";
import { useAppContext } from "../../../../core/context/appContext";
import DemandsList from "./components/demands-list/DemandsList";
import { useSidebarContext } from "../sidebar/sidebarContext";
import CreateDemand from "./create-demand/CreateDemand";
import JobOrders from "./job-orders/JobOrders";
import AllDemands from "./all-demands/AllDemands";
import TeamMembers from "./team-members/TeamMembers";
import AssetManagement from "./asset-management/AssetManagement";
import LocationTrees from "./location-trees/LocationTrees";
import DemandsToBeConfirmed from "./demands-to-be-confirmed/DemandsToBeConfirmed";

const demandsToBeConfirmed = [
  {
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
  },
];

function DashboardContent() {
  const { state } = useAppContext();
  const { state: sidebarState } = useSidebarContext();
  console.log(sidebarState, state);

  function returnDashboardTitleAccordingToSidebarState() {
    switch (state.user.role) {
      case "depo-elemani":
        switch (sidebarState.activeSidebar) {
          case 0:
            return "Onay Bekleyen Talepler";

          case 1:
            return "Bakım Talebi Oluştur";
          default:
            break;
        }
        break;

      case "bakim-ekibi-elemani":
        switch (sidebarState.activeSidebar) {
          case 0:
            return "Bana Tanımlanan İş Emirleri";
          default:
            break;
        }
        break;

      case "bakim-ekibi-lideri":
        switch (sidebarState.activeSidebar) {
          case 0:
            return "Tüm Bakım Talepleri";

          case 1:
            return "Ekip Üyeleri Yönetimi";

          case 2:
            return "Varlık Yönetimi";

          case 3:
            return "Lokasyon Ağaçları";
          default:
            break;
        }
        break;

      default:
        break;
    }
  }

  function returnDashboardContentAccordingToSidebarState() {
    console.log(state.user.role);
    switch (state.user.role) {
      case "depo-elemani":
        switch (sidebarState.activeSidebar) {
          case 0:
            return <DemandsToBeConfirmed />;

          case 1:
            return <CreateDemand />;
          default:
            break;
        }
        break;

      case "bakim-ekibi-elemani":
        switch (sidebarState.activeSidebar) {
          case 0:
            return <JobOrders />;
          default:
            break;
        }
        break;

      case "bakim-ekibi-lideri":
        switch (sidebarState.activeSidebar) {
          case 0:
            return <AllDemands />;

          case 1:
            return <TeamMembers />;

          case 2:
            return <AssetManagement />;

          case 3:
            return <LocationTrees />;
          default:
            break;
        }
        break;

      default:
        break;
    }
  }

  return (
    <div className="dashboard-content">
      <div className="dashboard-content__header">
        <p className="dashboard-content__header__title">
          {returnDashboardTitleAccordingToSidebarState()}
        </p>
      </div>

      <div className="dashboard-content__body">
        {returnDashboardContentAccordingToSidebarState()}
      </div>
    </div>
  );
}

export default DashboardContent;
