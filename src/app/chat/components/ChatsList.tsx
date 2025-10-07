import ChatMessage from "./ChatMessage";
import { data } from "../data/data";
export default function ChatsList() {
  return (
    <>
      <article className="h-[calc(100vh-9.25rem)] overflow-y-auto bg-pink-50 p-4">
        <ul className="mx-auto flex max-w-5xl flex-1 flex-col gap-4 p-4">
          {data.map((message, index) => (
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
