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
}

const AuthContext: React.Context<ContextProps> = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setloading] = useState<boolean>(true);

  setLoading(false);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) setCurrentUser(user);
    });
    return unsuscribe;
  }, []);

  const value = { login, signup, currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
