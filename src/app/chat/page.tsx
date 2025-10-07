import Header from "./components/Header";
import ChatsList from "./components/ChatsList";
import NewMessageForm from "./components/NewMessageForm";

export default function page() {
  return (
    <>
      <Header />
      <ChatsList />
      <NewMessageForm />
    </>
  );
}
