import React from "react";
import Header from "../../components/header/Header";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />

      {children}
    </div>
  );
}

export default MainLayout;
