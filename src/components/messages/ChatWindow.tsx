import ChatHeader from "./ChatHeader";
import MessagesView from "./MessagesView";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  partner: any;
  messages: any[];
  currentUser: { id: string };
  messagesEndRef: React.RefObject<HTMLDivElement>;
  newMessage: string;
  setNewMessage: (value: string) => void;
  handleSendMessage: () => void;
  setIsMobileListVisible: (visible: boolean) => void;
  isMobileListVisible: boolean;
}

export default function ChatWindow({
  partner,
  messages,
  currentUser,
  messagesEndRef,
  newMessage,
  setNewMessage,
  handleSendMessage,
  setIsMobileListVisible,
}: ChatWindowProps) {
  return (
    <div
      className={` ${
        !partner ? "hidden" : "block"
      } md:block flex-1 flex flex-col h-full`}
    >
      <ChatHeader
        partner={partner}
        setIsMobileListVisible={setIsMobileListVisible}
      />
      <MessagesView
        messages={messages}
        currentUser={currentUser}
        messagesEndRef={messagesEndRef}
      />
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}
