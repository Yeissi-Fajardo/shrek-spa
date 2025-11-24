// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import NoMatch from "./pages/NoMatch.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NavBar from "./components/NavBar.jsx";

// Páginas
import Landing from "./pages/Landing.jsx";
import Peliculas from "./pages/Peliculas.jsx";
import Personajes from "./pages/Personajes.jsx";
import Escenas from "./pages/Escenas.jsx";
import Productos from "./pages/Productos.jsx";
import Foros from "./pages/Foros.jsx";
import Login from "./pages/Login.jsx";
import MiCuenta from "./pages/MiCuenta.jsx";

import "./index.css";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <NavBar />
        <div style={{ padding: "12px 16px" }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/escenas" element={<Escenas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/foros" element={<Foros />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cuenta"
              element={
                <ProtectedRoute>
                  <MiCuenta />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </HashRouter>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
