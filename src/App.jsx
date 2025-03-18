import "./App.css";

import AuthButton from "./components/AuthButton";
import UserAuthProvider from "./components/UserAuthProvider";

function App() {
  return (
    <UserAuthProvider>
      <h1>Welcome to My App</h1>
      <AuthButton />
    </UserAuthProvider>
  );
}

export default App;
