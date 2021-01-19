import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import firebase from "firebase";

interface ContextProps {
  currentUser?: firebase.User | null;
  signup?: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  login?: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  logout?: () => Promise<void>;
}

const AuthContext: React.Context<ContextProps> = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  const value = { login, logout, signup, currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
