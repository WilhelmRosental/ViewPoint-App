"use client";

import Image from "next/image";
import {
  X,
  Menu,
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
  // ...other properties if needed...
}

interface MobileSidebarProps {
  user: UserSettings;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setSidebarOpen: (open: boolean) => void;
}

export default function MobileSidebar({
  user,
  activeTab,
  setActiveTab,
  setSidebarOpen,
}: MobileSidebarProps) {
  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75"
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Fermer le menu</span>
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            {/* ...existing code pour afficher la photo et les infos utilisateur... */}
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
          <nav className="mt-5 px-2 space-y-1">
            <button
              onClick={() => {
                setActiveTab("profile");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "profile"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <User className="mr-4 h-6 w-6 flex-shrink-0" />
              Profil
            </button>
            <button
              onClick={() => {
                setActiveTab("security");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "security"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Lock className="mr-4 h-6 w-6 flex-shrink-0" />
              Sécurité
            </button>
            <button
              onClick={() => {
                setActiveTab("notifications");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "notifications"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Bell className="mr-4 h-6 w-6 flex-shrink-0" />
              Notifications
            </button>
            <button
              onClick={() => {
                setActiveTab("payment");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "payment"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <CreditCard className="mr-4 h-6 w-6 flex-shrink-0" />
              Paiement
            </button>
            <button
              onClick={() => {
                setActiveTab("privacy");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "privacy"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <UserCog className="mr-4 h-6 w-6 flex-shrink-0" />
              Confidentialité
            </button>
            <button
              onClick={() => {
                setActiveTab("help");
                setSidebarOpen(false);
              }}
              className={`group flex items-center px-2 py-2 rounded-md w-full ${
                activeTab === "help"
                  ? "bg-teal-50 text-teal-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <HelpCircle className="mr-4 h-6 w-6 flex-shrink-0" />
              Aide
            </button>
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button className="flex-shrink-0 group block w-full text-left">
            <div className="flex items-center">
              <div>
                <LogOut className="h-6 w-6 text-red-600 mr-3" />
              </div>
              <div className="text-sm font-medium text-red-600">
                Déconnexion
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
