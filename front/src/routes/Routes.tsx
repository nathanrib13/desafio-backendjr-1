import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { IndexPage } from "../pages/index/indexPage";
import { LoginPage } from "../pages/login/loginPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<IndexPage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
