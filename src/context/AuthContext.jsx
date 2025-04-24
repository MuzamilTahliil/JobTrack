import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  
import { signOut } from "../lib/auth";  
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();



  const logout = async () => {
    try {
      await signOut();  
      navigate("/signin");  
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value = {
    user,
    profile,
    isLoading,
    isLoggedIn: !!user,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within and AuthProvider");
  }

  return context;
}
