import React from "react";
import "./job-orders-list.css";
import JobOrdersListItem from "../job-orders-list-item/JobOrdersListItem";

function JobOrdersList({ jobOrders }) {
  return (
    <div className="job-orders-list">
      {jobOrders.map((item) => (
        <JobOrdersListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default JobOrdersList;
