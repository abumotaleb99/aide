import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    const loggedUser = JSON.parse(userJSON);

    if (loggedUser) {
      setUser(loggedUser);
      setLoading(false);
    }
  }, []);

  const authInfo = {
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
