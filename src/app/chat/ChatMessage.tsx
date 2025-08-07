import type { ChatMessageType } from "./types";
import ChatbotIcon from "../../components/ui/ChatbotIcon";


const ChatMessage = ({ chat }: { chat: ChatMessageType }) => {
  if (chat.hideInChat) return null;

  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
        chat.isError ? "error" : ""
      }`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p className="user-message">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
