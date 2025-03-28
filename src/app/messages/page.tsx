"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search,
  MoreVertical,
  ChevronLeft,
  MessageCircleIcon as Message,
} from "lucide-react";
import ConversationsList from "../../components/messages/ConversationsList";
import ChatWindow from "../../components/messages/ChatWindow";

// Types
interface User {
  id: string;
  name: string;
  avatar: string;
  status?: "online" | "offline";
  lastSeen?: string;
  unreadCount?: number;
}

interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
  attachments?: { type: string; url: string; name?: string }[];
}

interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: {
    text: string;
    timestamp: string;
  };
  unreadCount: number;
}

// Mock data
const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  avatar: "/placeholder.svg?height=40&width=40",
};

const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    participants: [
      {
        id: "user-2",
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "online",
      },
    ],
    lastMessage: {
      text: "I'd love to book a session for next week",
      timestamp: "10:42 AM",
    },
    unreadCount: 2,
  },
  {
    id: "conv-2",
    participants: [
      {
        id: "user-3",
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "offline",
        lastSeen: "2h ago",
      },
    ],
    lastMessage: {
      text: "The photos look amazing! Thank you so much",
      timestamp: "Yesterday",
    },
    unreadCount: 0,
  },
  {
    id: "conv-3",
    participants: [
      {
        id: "user-4",
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "online",
      },
    ],
    lastMessage: {
      text: "Can we reschedule our appointment?",
      timestamp: "Yesterday",
    },
    unreadCount: 0,
  },
  {
    id: "conv-4",
    participants: [
      {
        id: "user-5",
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "offline",
        lastSeen: "5h ago",
      },
    ],
    lastMessage: {
      text: "I'm interested in your portrait photography",
      timestamp: "Mar 15",
    },
    unreadCount: 0,
  },
  {
    id: "conv-5",
    participants: [
      {
        id: "user-6",
        name: "Jessica Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "online",
      },
    ],
    lastMessage: {
      text: "Do you have availability next month?",
      timestamp: "Mar 14",
    },
    unreadCount: 0,
  },
];

const mockMessages: Record<string, ChatMessage[]> = {
  "conv-1": [
    {
      id: "msg-1",
      senderId: "user-2",
      text: "Hi there! I saw your portfolio and I'm really impressed with your work.",
      timestamp: "10:30 AM",
      read: true,
    },
    {
      id: "msg-2",
      senderId: "user-1",
      text: "Thank you! I appreciate that. How can I help you?",
      timestamp: "10:32 AM",
      read: true,
    },
    {
      id: "msg-3",
      senderId: "user-2",
      text: "I'm looking for a photographer for my wedding in June. Are you available?",
      timestamp: "10:35 AM",
      read: true,
    },
    {
      id: "msg-4",
      senderId: "user-1",
      text: "I'd be happy to discuss that! What date in June are you looking at?",
      timestamp: "10:38 AM",
      read: true,
    },
    {
      id: "msg-5",
      senderId: "user-2",
      text: "We're planning for June 15th. It would be a full day event.",
      timestamp: "10:40 AM",
      read: true,
    },
    {
      id: "msg-6",
      senderId: "user-2",
      text: "I'd love to book a session for next week to discuss the details in person if you're available.",
      timestamp: "10:42 AM",
      read: false,
    },
  ],
  "conv-2": [
    {
      id: "msg-7",
      senderId: "user-3",
      text: "Hello! I received the photos from our session last week.",
      timestamp: "Yesterday, 2:15 PM",
      read: true,
    },
    {
      id: "msg-8",
      senderId: "user-1",
      text: "Great! What do you think of them?",
      timestamp: "Yesterday, 2:20 PM",
      read: true,
    },
    {
      id: "msg-9",
      senderId: "user-3",
      text: "The photos look amazing! Thank you so much for capturing these moments.",
      timestamp: "Yesterday, 2:25 PM",
      read: true,
      attachments: [
        {
          type: "image",
          url: "/placeholder.svg?height=200&width=300",
          name: "family_photo.jpg",
        },
      ],
    },
    {
      id: "msg-10",
      senderId: "user-1",
      text: "I'm so glad you like them! It was a pleasure working with you and your family.",
      timestamp: "Yesterday, 2:30 PM",
      read: true,
    },
  ],
};

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<string | null>(
    null
  );
  const [conversations, setConversations] = useState(mockConversations);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeConversation) {
      setMessages(mockMessages[activeConversation] || []);
      const updatedConversations = conversations.map((conv) =>
        conv.id === activeConversation ? { ...conv, unreadCount: 0 } : conv
      );
      setConversations(updatedConversations);
      if (window.innerWidth < 768) setIsMobileListVisible(false);
    }
  }, [activeConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const filteredConversations = conversations.filter((conv) =>
    conv.participants[0].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === "" || !activeConversation) return;
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };
    setMessages([...messages, newMsg]);
    const updatedConversations = conversations.map((conv) =>
      conv.id === activeConversation
        ? {
            ...conv,
            lastMessage: {
              text: newMessage,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          }
        : conv
    );
    setConversations(updatedConversations);
    setNewMessage("");
  };

  const getConversationPartner = () => {
    if (!activeConversation) return null;
    const conversation = conversations.find(
      (conv) => conv.id === activeConversation
    );
    return conversation?.participants[0];
  };

  const partner = getConversationPartner();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Global Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <MoreVertical className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Conversations list */}
        <ConversationsList
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredConversations={filteredConversations}
          activeConversation={activeConversation}
          setActiveConversation={setActiveConversation}
          isMobileListVisible={isMobileListVisible}
        />

        {/* Conversation view */}
        {activeConversation ? (
          <ChatWindow
            partner={partner}
            messages={messages}
            currentUser={currentUser}
            messagesEndRef={messagesEndRef}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleSendMessage={handleSendMessage}
            setIsMobileListVisible={setIsMobileListVisible}
            isMobileListVisible={isMobileListVisible}
          />
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Message className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-xl font-medium text-gray-700 mb-2">
                Your Messages
              </h2>
              <p className="text-gray-500 max-w-md">
                Select a conversation from the list to view messages or start a
                new conversation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
