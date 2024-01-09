import React from "react";
import "./job-orders.css";
import JobOrdersList from "./components/job-orders-list/JobOrdersList";

const jobOrders = [
  {
    id: 1,
    no: "1231123",
    date: "12/12/2020 - 12:45",
    jobOrderTitle: "Sökülen motorun ana parçaları kontrol edilecek",
  },
  {
    id: 2,
    no: "123123",
    date: "12/12/2020 - 12:45",
    jobOrderTitle: "Motor takımı sökülecek",
  },
];

function JobOrders() {
  return <div className="job-orders">
    <JobOrdersList jobOrders={jobOrders} />
  </div>;
}

export default JobOrders;
