import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) {
    // Redirige a /login y recuerda a dónde quería ir el usuario
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
