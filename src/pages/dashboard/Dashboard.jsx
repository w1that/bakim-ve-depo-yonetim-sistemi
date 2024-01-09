import React from "react";
import "./dashboard.css";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardContent from "./components/dashboard-content/DashboardContent";
import { SidebarProvider } from "./components/sidebar/sidebarContext";

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="dashboard">
        <Sidebar />

        <DashboardContent />
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;
