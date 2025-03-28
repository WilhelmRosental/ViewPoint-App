"use client";

import type React from "react";

import { useState } from "react";
import { X, Check, Menu } from "lucide-react";
import ProfileSettings from "../../components/settings/ProfileSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import PaymentSettings from "../../components/settings/PaymentSettings";
import PrivacySettings from "../../components/settings/PrivacySettings";
import HelpSettings from "../../components/settings/HelpSettings";
import MobileSidebar from "../../components/settings/MobileSidebar";
import DesktopSidebar from "../../components/settings/DesktopSidebar";

// Types pour les données utilisateur
interface UserSettings {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  language: string;
  profileImage: string;
  notificationPreferences: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  newsletterSubscribed: boolean;
  isPhotographer: boolean;
}

export default function SettingsPage() {
  // État pour gérer les données de l'utilisateur
  const [user, setUser] = useState<UserSettings>({
    firstName: "Thomas",
    lastName: "Martin",
    email: "thomas.martin@exemple.com",
    phone: "+33 6 12 34 56 78",
    address: "15 rue des Fleurs",
    city: "Lyon",
    zip: "69000",
    country: "France",
    language: "fr",
    profileImage: "/placeholder.svg?height=200&width=200",
    notificationPreferences: {
      email: true,
      push: false,
      sms: true,
    },
    newsletterSubscribed: true,
    isPhotographer: true,
  });

  // État pour gérer l'onglet actif dans les paramètres
  const [activeTab, setActiveTab] = useState<string>("profile");

  // États pour gérer les différents formulaires
  const [profileForm, setProfileForm] = useState({ ...user });
  const [notificationForm, setNotificationForm] = useState({
    ...user.notificationPreferences,
    newsletter: user.newsletterSubscribed,
  });

  // État pour le chargement
  const [isLoading, setIsLoading] = useState(false);

  // État pour les messages de succès
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // État pour la sidebar mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Gérer la soumission du formulaire de profil
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un appel API
    setTimeout(() => {
      setUser({
        ...user,
        firstName: profileForm.firstName,
        lastName: profileForm.lastName,
        email: profileForm.email,
        phone: profileForm.phone,
        address: profileForm.address,
        city: profileForm.city,
        zip: profileForm.zip,
        country: profileForm.country,
        language: profileForm.language,
      });
      setIsLoading(false);
      setSuccessMessage("Profil mis à jour avec succès");

      // Effacer le message après 3 secondes
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1000);
  };

  // Gérer la soumission du formulaire de notifications
  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un appel API
    setTimeout(() => {
      setUser({
        ...user,
        notificationPreferences: {
          email: notificationForm.email,
          push: notificationForm.push,
          sms: notificationForm.sms,
        },
        newsletterSubscribed: notificationForm.newsletter,
      });
      setIsLoading(false);
      setSuccessMessage("Préférences de notification mises à jour");

      // Effacer le message après 3 secondes
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }, 1000);
  };

  // Mettre à jour le formulaire de profil
  const updateProfileForm = (field: string, value: string) => {
    setProfileForm({ ...profileForm, [field]: value });
  };

  // Mettre à jour le formulaire de notifications
  const updateNotificationForm = (field: string, value: boolean) => {
    setNotificationForm({ ...notificationForm, [field]: value });
  };

  // Fonction pour afficher le contenu en fonction de l'onglet actif
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      case "notifications":
        return <NotificationSettings />;
      case "payment":
        return <PaymentSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "help":
        return <HelpSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mb-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Paramètres du compte
              </h1>
            </div>
            <div className="mt-4 md:mt-0 md:hidden">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar pour mobile */}
            {sidebarOpen && (
              <MobileSidebar
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                setSidebarOpen={setSidebarOpen}
              />
            )}

            {/* Sidebar pour desktop */}
            <DesktopSidebar
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Contenu principal */}
            <div className="flex-1 overflow-auto focus:outline-none">
              <main className="py-6 px-4 sm:px-6 md:px-8">
                {successMessage && (
                  <div className="fixed top-4 right-4 bg-green-50 text-green-800 px-4 py-3 rounded-md shadow-md flex items-start z-50 animate-fadeIn">
                    <Check className="h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">{successMessage}</p>
                    </div>
                    <button
                      onClick={() => setSuccessMessage(null)}
                      className="ml-4 text-green-600 hover:text-green-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}

                {renderContent()}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
