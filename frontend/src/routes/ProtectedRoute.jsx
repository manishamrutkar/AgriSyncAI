import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({
  children,
}) {
  const { user, loading } =
    useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#08120D] flex items-center justify-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  return children;
}

export default ProtectedRoute;