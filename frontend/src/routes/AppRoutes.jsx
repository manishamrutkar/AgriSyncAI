import {
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";

import Login from "../pages/Login";

import FarmerDashboard from "../pages/farmer/FarmerDashboard";

import CropRecommendation from "../pages/farmer/CropRecommendation";

import Analytics from "../pages/farmer/Analytics";

import AdminDashboard from "../pages/admin/AdminDashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      {/* PROTECTED */}
      <Route
        path="/farmer/dashboard"
        element={
          <ProtectedRoute>
            <FarmerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/farmer/recommendation"
        element={
          <ProtectedRoute>
            <CropRecommendation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/farmer/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;