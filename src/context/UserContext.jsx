import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const parseStoredUser = (storedUser) => {
    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Failed to parse stored user data:", error);
      return storedUser;
    }
  };

  const normalizeUser = (value) => {
    if (!value) return null;
    if (typeof value === "string") return value;

    const nestedUser =
      value.user ||
      value.data ||
      value.profile ||
      value.me ||
      value.account ||
      value;

    return typeof nestedUser === "object" && nestedUser !== null
      ? nestedUser
      : value;
  };

  // Initialize user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(normalizeUser(parseStoredUser(storedUser)));
    }
  }, []);

  // Listen for user changes from login/logout/signup
  useEffect(() => {
    const handleUserChange = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(normalizeUser(parseStoredUser(storedUser)));
      } else {
        setUser(null);
      }
    };

    window.addEventListener("userChange", handleUserChange);
    return () => window.removeEventListener("userChange", handleUserChange);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context.user;
};
