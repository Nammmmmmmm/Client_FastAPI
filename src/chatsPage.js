import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        // projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        projectId="793b92e1-f319-44ca-a42c-1743c8a78840"
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;