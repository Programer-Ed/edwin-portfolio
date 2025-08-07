"use client";

import type { UIMessage } from "ai";
import ChatbotIcon from "../../components/ui/ChatbotIcon";

export function Messages({ messages }: { messages: UIMessage[] }) {
  return (
    <div className="flex-1 px-4 py-6 overflow-y-auto space-y-4">
      {messages.map((msg, i) => {
        const isUser = msg.role === "user";
        const messageClass = isUser ? "user-message" : "bot-message";
        const bubbleClass = isUser ? "bg-blue-500 text-white" : "message-text";

        return (
          <div key={i} className={`message ${messageClass} ${isUser ? "text-right" : ""}`}>
            {!isUser && <ChatbotIcon />} 
            <span className={bubbleClass}>{msg.content}</span>
          </div>
        );
      })}
    </div>
  );
}
