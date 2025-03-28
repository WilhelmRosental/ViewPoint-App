import Image from "next/image";
import { Search } from "lucide-react";

interface User {
  id: string;
  name: string;
  avatar: string;
  status?: "online" | "offline";
  lastSeen?: string;
  unreadCount?: number;
}

interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: { text: string; timestamp: string };
  unreadCount: number;
}

interface ConversationsListProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredConversations: Conversation[];
  activeConversation: string | null;
  setActiveConversation: (id: string) => void;
  isMobileListVisible: boolean;
}

export default function ConversationsList({
  searchQuery,
  setSearchQuery,
  filteredConversations,
  activeConversation,
  setActiveConversation,
  isMobileListVisible,
}: ConversationsListProps) {
  return (
    <div
      className={`${
        isMobileListVisible ? "block" : "hidden"
      } md:block w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200`}
    >
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      {/* List */}
      <div className="overflow-y-auto h-[calc(100%-73px)]">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                activeConversation === conversation.id ? "bg-blue-50" : ""
              }`}
              onClick={() => setActiveConversation(conversation.id)}
            >
              <div className="flex items-start">
                <div className="relative">
                  <Image
                    src={
                      conversation.participants[0].avatar || "/placeholder.svg"
                    }
                    alt={conversation.participants[0].name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  {conversation.participants[0].status === "online" && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium text-gray-900">
                      {conversation.participants[0].name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {conversation.lastMessage?.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage?.text}
                  </p>
                </div>
                {conversation.unreadCount > 0 && (
                  <span className="ml-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No conversations found
          </div>
        )}
      </div>
    </div>
  );
}
