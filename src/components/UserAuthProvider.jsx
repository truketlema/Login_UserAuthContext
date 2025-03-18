import { createContext, useState, useEffect } from "react";

export const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("");

  const login = () => {
    setIsLoggedIn(true);
    setTheme("white"); // Light theme for logged-in state
  };

  const logout = () => {
    setIsLoggedIn(false);
    setTheme("gray"); // Red theme when logged out
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme; // Update the body background color dynamically
  }, [theme]);

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout, theme }}>
      {children}
    </UserAuthContext.Provider>
  );
}
