import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layouts/main-layout/MainLayout";
import { AppProvider } from "./core/context/appContext";
import { ModalProvider } from "./components/modal/modalContext";
import CustomModal from "./components/modal/CustomModal";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
]);

root.render(
  <ModalProvider>
    <AppProvider>
      <RouterProvider router={router} />

      <CustomModal />
    </AppProvider>
  </ModalProvider>
);
