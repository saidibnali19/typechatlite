export interface ChatMessageProps {
  sender: "You" | "Others"; // only allow these two values
  username?: string; // optional — only shown when sender = "Others"
  text: string; // message text
}

export interface NewMessageFormProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (e?: React.FormEvent) => void;
}

export interface ChatsListProps {
  messages: ChatMessageProps[];
}
