import React from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  HomeScreen,
  ErrorScreen,
  IndexScreen,
  LoginScreen,
  TransactionScreen,
} from "./screens";

import { DashboardLayout } from "./components";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />} errorElement={<ErrorScreen />}>
      <Route index element={<IndexScreen />} />
      <Route path="/login" element={<LoginScreen />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/transactions" element={<TransactionScreen />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
