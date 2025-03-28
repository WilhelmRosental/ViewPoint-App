import Image from "next/image";
import { ChevronLeft, Phone, Video, MoreVertical } from "lucide-react";

interface User {
  id: string;
  name: string;
  avatar: string;
  status?: "online" | "offline";
  lastSeen?: string;
}

interface ChatHeaderProps {
  partner: User | null;
  setIsMobileListVisible: (visible: boolean) => void;
}

export default function ChatHeader({
  partner,
  setIsMobileListVisible,
}: ChatHeaderProps) {
  return (
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
            <h2 className="font-medium text-gray-900">{partner.name}</h2>
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
  );
}
