import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/libs/axios/axios";
import { storage } from "@/shared/storage/storage";

type AuthContextData = {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadToken() {
      const storedToken = storage.getString("token");

      if (storedToken) {
        try {
          await api.get("/rooms");
          setToken(storedToken);
        } catch {
          storage.remove("token");
        }
      }

      setLoading(false);
    }

    loadToken();
  }, []);

  function signIn(newToken: string) {
    storage.set("token", newToken);
    setToken(newToken);
  }

  function signOut() {
    storage.remove("token");
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}