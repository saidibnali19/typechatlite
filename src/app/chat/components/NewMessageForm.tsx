import { NewMessageFormProps } from "@/types/types";

export default function NewMessageForm({
  input,
  setInput,
  sendMessage,
}: NewMessageFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(e);
  };
  return (
    <>
      <form
        className="fixed inset-[auto_0_0_0] mx-auto flex w-[min(100%,var(--container-5xl))] gap-4 bg-white p-4"
        onSubmit={handleSubmit}
      >
        <input
          className="flex-1 rounded-full border border-gray-300 p-[.5em_1.25em] transition focus:border-transparent focus:ring-2 focus:ring-pink-500 focus:outline-none"
          placeholder="Type a message..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 font-medium text-white shadow-md transition hover:from-pink-600 hover:to-pink-700 hover:shadow-lg focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </>
  );
}
