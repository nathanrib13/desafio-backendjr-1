import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/dashboardPage";
import { IndexPage } from "../pages/index/indexPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<IndexPage />} />
      <Route path="/" element={<IndexPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
