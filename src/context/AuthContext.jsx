import React, { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login "mock": acepta cualquier email/password no vacíos
  const login = async (email, password) => {
    if (!email || !password) return false;
    // aquí podrías llamar a tu API real si quisieras
    setUser({ email, name: "Usuario Shrek" });
    return true;
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      isLogged: !!user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook de conveniencia
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
