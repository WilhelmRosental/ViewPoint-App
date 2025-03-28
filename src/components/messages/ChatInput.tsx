import { Send } from "lucide-react";

interface ChatInputProps {
  newMessage: string;
  setNewMessage: (value: string) => void;
  handleSendMessage: () => void;
}

export default function ChatInput({
  newMessage,
  setNewMessage,
  handleSendMessage,
}: ChatInputProps) {
  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 transition-colors"
          onClick={handleSendMessage}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
