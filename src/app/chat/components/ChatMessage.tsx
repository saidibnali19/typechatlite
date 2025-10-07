import { ChatMessageProps } from "@/types/types";

export default function ChatMessage({
  sender,
  username,
  text,
}: ChatMessageProps) {
  return (
    <>
      <article
        className={
          sender === "Others"
            ? `flex max-w-xs self-start rounded-2xl bg-white p-4 px-4 py-2.5 text-gray-800 shadow-md md:max-w-md lg:max-w-lg`
            : `ml-auto flex max-w-xs rounded-2xl bg-linear-to-br from-pink-500 to-pink-600 p-4 px-4 py-2.5 text-white shadow-md md:max-w-md lg:max-w-lg`
        }
      >
        <div className="space-y-2">
          {sender === "Others" && (
            <p className="text-xs font-bold text-pink-600">{username}</p>
          )}
          <p className="text-lg break-words">{text}</p>
        </div>
      </article>
    </>
  );
}
