import React, { createContext, useContext, useEffect, useState } from "react";
import { api, registerSignOutCallback } from "@/libs/axios/axios";
import { storage } from "@/shared/storage/storage";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "@/shared/types/user";


type AuthContextData = {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  signIn: (token: string, user: User) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();

  useEffect(() => {
    async function loadToken() {
      const storedToken = storage.getString("token");
      const storedUser = storage.getString("user");

      if (storedToken && storedUser) {
        try {
          await api.get("/rooms");
          setToken(storedToken);
          setUser(JSON.parse(storedUser));

        } catch {
          storage.remove("token");
          storage.remove("user");
        }
      }

      setLoading(false);
    }

    loadToken();
  }, []);
  
  function signIn(newToken: string, loggedUser: User) {
      storage.set("token", newToken);
      storage.set("user", JSON.stringify(loggedUser));
      setToken(newToken);
      setUser(loggedUser);
    }
  
    function signOut() {
      storage.remove("token");
      storage.remove("user");
      setToken(null);
      setUser(null);
      queryClient.clear();
    }

  useEffect(() => {
    registerSignOutCallback(signOut);
  }, []);


  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        loading,
        signIn,
        signOut,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}