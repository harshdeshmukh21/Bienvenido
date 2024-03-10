import { PrettyChatWindow } from "react-chat-engine-pretty";
import "../App.css";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="
        f17fb245-7cfd-412a-9c5e-4188d0768164"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
