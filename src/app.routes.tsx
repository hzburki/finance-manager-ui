import React from "react";
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  HomeScreen,
  ErrorScreen,
  IndexScreen,
  LoginScreen,
  BudgetScreen,
  ReportScreen,
  TransactionScreen,
  ForgotPasswordScreen,
} from "./screens";

import { DashboardLayout } from "./components";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />} errorElement={<ErrorScreen />}>
      <Route index element={<IndexScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/budgets" element={<BudgetScreen />} />
        <Route path="/reports" element={<ReportScreen />} />
        <Route path="/transactions" element={<TransactionScreen />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
