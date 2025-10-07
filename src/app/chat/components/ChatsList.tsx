import { ChatsListProps } from "@/types/types";
import ChatMessage from "./ChatMessage";

export default function ChatsList({ messages }: ChatsListProps) {
  return (
    <>
      <article className="h-[calc(100vh-9.25rem)] overflow-y-auto bg-pink-50 p-4">
        <ul className="mx-auto flex max-w-5xl flex-1 flex-col gap-4 p-4">
          {messages.map((message, index) => (
            <li key={index}>
              <ChatMessage
                sender={message.sender}
                username={message.username}
                text={message.text}
              />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
