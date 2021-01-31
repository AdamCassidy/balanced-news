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
  googleLogin?: () => Promise<void | firebase.auth.OAuthCredential>;
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
  const googleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return auth
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential as firebase.auth.OAuthCredential;
        return credential;

        // // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = credential.accessToken;
        // // The signed-in user info.
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
        console.log(errorMessage);
        alert(errorMessage);
      });
  };
  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) setCurrentUser(user);
      else {
        setCurrentUser(null);
      }
    });
    return unsuscribe;
  }, []);

  const value = { googleLogin, login, logout, signup, currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
