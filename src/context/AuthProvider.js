import React, { createContext, useEffect, useState } from 'react';

import app from '../config/firebaseConfig';

// firebase
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(app);

// create context
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const google = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // on auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      // console.log(current);
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //   sign up new users
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update a user's profile
  const profile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  //  sign in existing users
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // send a password reset email
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   google sign in
  const googleSignin = () => {
    return signInWithPopup(auth, google);
  };

  //   sign out
  const signout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    signup,
    profile,
    signin,
    resetPass,
    googleSignin,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
