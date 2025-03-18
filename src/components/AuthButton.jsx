import { useContext } from "react";
import { UserAuthContext } from "./UserAuthProvider";
import styles from "./AuthButton.module.css";
export default function AuthButton() {
  const { isLoggedIn, login, logout, theme, setTheme } =
    useContext(UserAuthContext);
  const buttonStyle = {
    backgroundColor: isLoggedIn ? "" : "rgb(139, 64, 64)",
  };
  return (
    <div>
      <p>{isLoggedIn ? "Welcome, User!" : "Please log in"}</p>
      <button style={buttonStyle} onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
