import React from "react";
import "./demands-list.css";
import DemandsListItem from "../demands-list-item/DemandsListItem";

function DemandsList({ demands }) {
  return (
    <div className="demands-list">
      {demands.map((demand, index) => (
        <DemandsListItem key={index} demand={demand} />
      ))}
    </div>
  );
}

export default DemandsList;
