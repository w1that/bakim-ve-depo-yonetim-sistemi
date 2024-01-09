import React, { useEffect } from "react";
import "./sidebar.css";
import { useSidebarContext } from "./sidebarContext";
import { useAppContext } from "../../../../core/context/appContext";

import AddIcon from "../../../../assets/add.png";
import BranchIcon from "../../../../assets/branch.png";
import DocumentIcon from "../../../../assets/document.png";
import HistoryIcon from "../../../../assets/history.png";
import PackageIcon from "../../../../assets/package.png";
import TeamIcon from "../../../../assets/team.png";
import AddIconActive from "../../../../assets/add-active.png";
import BranchIconActive from "../../../../assets/branch-active.png";
import DocumentIconActive from "../../../../assets/document-active.png";
import HistoryIconActive from "../../../../assets/history-active.png";
import PackageIconActive from "../../../../assets/package-active.png";
import TeamIconActive from "../../../../assets/team-active.png";

const sidebarItems = {
  "depo-elemani": [
    {
      title: "Geçmiş Bakım Talepleri",
      icon: "history",
    },
    {
      title: "Bakım Talebi Oluştur",
      icon: "add",
    },
  ],
  "bakim-ekibi-elemani": [
    {
      title: "İş Emirlerim",
      icon: "document",
    },
  ],
  "bakim-ekibi-lideri": [
    {
      title: "Tüm Bakım Talepleri",
      icon: "document",
    },
    {
      title: "Ekip Üyeleri",
      icon: "team",
    },
    {
      title: "Varlık Yönetimi",
      icon: (
        <img
          src={PackageIcon}
          alt="package"
          className="sidebar__items__item__icon"
        />
      ),
    },
    {
      title: "Lokasyon Ağaçları",
      icon: "branch",
    },
  ],
};

function Sidebar() {
  const { state, dispatch } = useSidebarContext();
  const { state: appState } = useAppContext();

  const sidebarItemsForUser = sidebarItems[appState.user.role];

  useEffect(() => {
    dispatch({
      type: "SIDEBAR",
      payload: 0,
    });
  }, [dispatch]);

  const handleClick = (index) => {
    dispatch({
      type: "SIDEBAR",
      payload: index,
    });
  };

  function renderIcon(icon) {
    switch (icon) {
      case "add":
        return (
          <img
            src={state.activeSidebar === 1 ? AddIconActive : AddIcon}
            alt="add"
            className="sidebar__items__item__icon"
          />
        );
      case "branch":
        return (
          <img
            src={state.activeSidebar === 3 ? BranchIconActive : BranchIcon}
            alt="branch"
            className="sidebar__items__item__icon"
          />
        );
      case "document":
        return (
          <img
            src={state.activeSidebar === 2 ? DocumentIconActive : DocumentIcon}
            alt="document"
            className="sidebar__items__item__icon"
          />
        );
      case "history":
        return (
          <img
            src={state.activeSidebar === 0 ? HistoryIconActive : HistoryIcon}
            alt="history"
            className="sidebar__items__item__icon"
          />
        );
      case "package":
        return (
          <img
            src={state.activeSidebar === 4 ? PackageIconActive : PackageIcon}
            alt="package"
            className="sidebar__items__item__icon"
          />
        );
      case "team":
        return (
          <img
            src={state.activeSidebar === 5 ? TeamIconActive : TeamIcon}
            alt="team"
            className="sidebar__items__item__icon"
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__items">
          {sidebarItemsForUser.map((item, index) => (
            <button
              onClick={() => handleClick(index)}
              key={index}
              className={`sidebar__items__item ${
                state.activeSidebar === index ? "active" : ""
              }`}
            >
              {renderIcon(item.icon)}
              <p className="sidebar__items__item__title">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
