"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  ChevronLeft,
  MessageCircleIcon as Message,
} from "lucide-react";

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
  const [conversations, setConversations] =
    useState<Conversation[]>(mockConversations);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages when active conversation changes
  useEffect(() => {
    if (activeConversation) {
      setMessages(mockMessages[activeConversation] || []);
      // Mark messages as read
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === activeConversation) {
          return { ...conv, unreadCount: 0 };
        }
        return conv;
      });
      setConversations(updatedConversations);

      // On mobile, hide the conversation list when a conversation is selected
      if (window.innerWidth < 768) {
        setIsMobileListVisible(false);
      }
    }
  }, [activeConversation]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Filter conversations based on search query
  const filteredConversations = conversations.filter((conv) =>
    conv.participants[0].name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Send a new message
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

    // Update messages
    setMessages([...messages, newMsg]);

    // Update conversation last message
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === activeConversation) {
        return {
          ...conv,
          lastMessage: {
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        };
      }
      return conv;
    });
    setConversations(updatedConversations);

    // Clear input
    setNewMessage("");
  };

  // Get the current conversation partner
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
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreVertical className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Conversation list - hidden on mobile when viewing a conversation */}
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

          {/* Conversations list */}
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
                          conversation.participants[0].avatar ||
                          "/placeholder.svg"
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

        {/* Conversation view */}
        {activeConversation ? (
          <div
            className={`${
              !isMobileListVisible ? "block" : "hidden"
            } md:block flex-1 flex flex-col h-full`}
          >
            {/* Conversation header */}
            <div className="p-4 border-b border-gray-200 bg-white flex items-center">
              <button
                className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-100"
                onClick={() => setIsMobileListVisible(true)}
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>

              {partner && (
                <>
                  <div className="relative">
                    <Image
                      src={partner.avatar || "/placeholder.svg"}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    {partner.status === "online" && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <h2 className="font-medium text-gray-900">
                      {partner.name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {partner.status === "online"
                        ? "Online"
                        : partner.lastSeen
                        ? `Last seen ${partner.lastSeen}`
                        : "Offline"}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Phone className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <Video className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100">
                      <MoreVertical className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === currentUser.id
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg p-3 ${
                        message.senderId === currentUser.id
                          ? "bg-blue-500 text-white"
                          : "bg-white border border-gray-200 text-gray-800"
                      }`}
                    >
                      <p>{message.text}</p>
                      {message.attachments &&
                        message.attachments.length > 0 && (
                          <div className="mt-2">
                            {message.attachments.map((attachment, index) => (
                              <div key={index} className="mt-2">
                                {attachment.type === "image" && (
                                  <div className="relative">
                                    <Image
                                      src={attachment.url || "/placeholder.svg"}
                                      alt={attachment.name || "Attachment"}
                                      width={200}
                                      height={150}
                                      className="rounded-md"
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      <div
                        className={`text-xs mt-1 ${
                          message.senderId === currentUser.id
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Message input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
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
          </div>
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
