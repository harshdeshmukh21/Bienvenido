import AuthPage from "./components/authpage";
import ChatPage from "./components/chatpage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;
