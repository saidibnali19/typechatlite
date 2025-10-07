"use client";

import Header from "./components/Header";
import ChatsList from "./components/ChatsList";
import NewMessageForm from "./components/NewMessageForm";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ChatMessageProps } from "@/types/types";

const socket = io(
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000",
);

export default function Page() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      sender: "Others",
      username: "Alice",
      text: "Hello everyone!",
    },
    {
      sender: "Others",
      username: "Bob",
      text: "Hi Alice 👋",
    },
    {
      sender: "You",
      text: "Nice to meet you!",
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message: ChatMessageProps) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const message: ChatMessageProps = {
      sender: "You",
      text: input,
    };

    socket.emit("sendMessage", message);
    setMessages((prev) => [...prev, message]);
    setInput("");
  };

  return (
    <>
      <Header />
      <ChatsList messages={messages} />
      <NewMessageForm
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </>
  );
}
