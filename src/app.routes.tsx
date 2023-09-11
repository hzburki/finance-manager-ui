import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Importing Screens
import LoginScreen from "./screens/login.screen";
import WebsiteScreen from "./screens/index.screen";
import DashboardScreen from "./screens/dashboard.screen";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WebsiteScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<DashboardScreen />} />
    </>
  )
);

export default AppRoutes;
