export interface ChatMessageProps {
  sender: "You" | "Others"; // only allow these two values
  username?: string; // optional — only shown when sender = "Others"
  text: string; // message text
}
