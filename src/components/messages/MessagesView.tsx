import Image from "next/image";

interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
  attachments?: { type: string; url: string; name?: string }[];
}

interface MessagesViewProps {
  messages: ChatMessage[];
  currentUser: { id: string };
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export default function MessagesView({
  messages,
  currentUser,
  messagesEndRef,
}: MessagesViewProps) {
  return (
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
              {message.attachments && message.attachments.length > 0 && (
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
  );
}
