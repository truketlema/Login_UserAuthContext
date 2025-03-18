import { createContext, useState, useEffect } from "react";

export const UserAuthContext = createContext();

export default function UserAuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("");

  const login = () => {
    setIsLoggedIn(true);
    setTheme("white");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setTheme("gray");
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme;
  }, [theme]);

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout, theme }}>
      {children}
    </UserAuthContext.Provider>
  );
}
