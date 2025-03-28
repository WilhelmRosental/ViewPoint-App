"use client";

import Image from "next/image";
import {
  User,
  Lock,
  Bell,
  CreditCard,
  UserCog,
  HelpCircle,
  LogOut,
} from "lucide-react";

interface UserSettings {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
}

interface DesktopSidebarProps {
  user: UserSettings;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DesktopSidebar({
  user,
  activeTab,
  setActiveTab,
}: DesktopSidebarProps) {
  return (
    // Sidebar pour desktop
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-5">
              <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                <Image
                  src={user.profileImage || "/placeholder.svg"}
                  alt="Photo de profil"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-900">{`${user.firstName} ${user.lastName}`}</span>
                <span className="text-xs text-gray-500 block truncate">
                  {user.email}
                </span>
              </div>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "profile"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <User className="mr-3 h-5 w-5 flex-shrink-0" />
                Profil
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "security"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Lock className="mr-3 h-5 w-5 flex-shrink-0" />
                Sécurité
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "notifications"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Bell className="mr-3 h-5 w-5 flex-shrink-0" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "payment"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <CreditCard className="mr-3 h-5 w-5 flex-shrink-0" />
                Paiement
              </button>
              <button
                onClick={() => setActiveTab("privacy")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "privacy"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <UserCog className="mr-3 h-5 w-5 flex-shrink-0" />
                Confidentialité
              </button>
              <button
                onClick={() => setActiveTab("help")}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full ${
                  activeTab === "help"
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                Aide
              </button>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button className="flex-shrink-0 w-full group flex items-center text-left">
              <LogOut className="mr-3 h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-600">
                Déconnexion
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
