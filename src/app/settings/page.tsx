"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  CreditCard,
  Edit,
  Globe,
  HelpCircle,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  Trash2,
  UserCog,
  X,
  Loader2,
  Bell,
  Wallet,
  User,
  FileText,
  Check,
  Menu,
  ChevronRight,
} from "lucide-react";

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
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Informations personnelles
              </h2>
              <form onSubmit={handleProfileSubmit}>
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  {/* Photo de profil */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full overflow-hidden">
                        <Image
                          src={user.profileImage || "/placeholder.svg"}
                          alt="Photo de profil"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 bg-teal-600 text-white p-1 rounded-full"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                    >
                      Changer la photo
                    </button>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={profileForm.firstName}
                        onChange={(e) =>
                          updateProfileForm("firstName", e.target.value)
                        }
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={profileForm.lastName}
                        onChange={(e) =>
                          updateProfileForm("lastName", e.target.value)
                        }
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={profileForm.email}
                        onChange={(e) =>
                          updateProfileForm("email", e.target.value)
                        }
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Téléphone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={profileForm.phone}
                        onChange={(e) =>
                          updateProfileForm("phone", e.target.value)
                        }
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Adresse
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      value={profileForm.address}
                      onChange={(e) =>
                        updateProfileForm("address", e.target.value)
                      }
                      className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={profileForm.city}
                      onChange={(e) =>
                        updateProfileForm("city", e.target.value)
                      }
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Code postal
                    </label>
                    <input
                      type="text"
                      id="zip"
                      value={profileForm.zip}
                      onChange={(e) => updateProfileForm("zip", e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Pays
                    </label>
                    <select
                      id="country"
                      value={profileForm.country}
                      onChange={(e) =>
                        updateProfileForm("country", e.target.value)
                      }
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                      <option value="France">France</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Canada">Canada</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Langue préférée
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="language"
                      value={profileForm.language}
                      onChange={(e) =>
                        updateProfileForm("language", e.target.value)
                      }
                      className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                      <option value="fr">Français</option>
                      <option value="en">Anglais</option>
                      <option value="es">Espagnol</option>
                      <option value="de">Allemand</option>
                      <option value="it">Italien</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin h-4 w-4 mr-2" />
                        Enregistrement...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Enregistrer les modifications
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {user.isPhotographer && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Profil photographe
                </h2>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">
                      Gérez votre profil public, vos spécialités et vos tarifs.
                    </p>
                  </div>
                  <Link
                    href="/photographer-profile"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Modifier mon profil photographe
                  </Link>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Disponibilité
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Mettez à jour votre calendrier de disponibilité pour
                    recevoir des demandes de réservation pertinentes.
                  </p>
                  <Link
                    href="/calendar"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Gérer mon calendrier
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Modifier le mot de passe
              </h2>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mot de passe actuel
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="current-password"
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nouveau mot de passe
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="new-password"
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Le mot de passe doit contenir au moins 8 caractères, dont
                      une majuscule, un chiffre et un caractère spécial.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Confirmer le nouveau mot de passe
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="confirm-password"
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Mettre à jour le mot de passe
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Authentification à deux facteurs
              </h2>
              <p className="text-gray-600 mb-4">
                L'authentification à deux facteurs ajoute une couche de sécurité
                supplémentaire à votre compte en exigeant un code de
                vérification en plus de votre mot de passe.
              </p>

              <div className="flex justify-between items-center py-4 border-t border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-900">État</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    L'authentification à deux facteurs est actuellement
                    désactivée.
                  </p>
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  Activer
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Sessions actives</h2>
              <p className="text-gray-600 mb-4">
                Ci-dessous se trouvent les appareils qui sont actuellement
                connectés à votre compte. Déconnectez ceux que vous ne
                reconnaissez pas.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        MacBook Pro - Chrome
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></div>
                          <p className="text-xs text-gray-500">
                            Connecté actuellement
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 ml-4">
                          Paris, France - 14 mars 2023
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        iPhone - Safari
                      </p>
                      <div className="flex items-center mt-1">
                        <p className="text-xs text-gray-500">
                          Lyon, France - 12 mars 2023
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <button className="inline-flex items-center text-sm text-red-600 hover:text-red-800">
                  <LogOut className="h-4 w-4 mr-1" />
                  Déconnecter toutes les autres sessions
                </button>
              </div>
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Préférences de notification
              </h2>
              <form onSubmit={handleNotificationSubmit}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Notifications par email
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Recevez des notifications par email concernant vos
                        messages, réservations et mises à jour.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationForm.email}
                        onChange={(e) =>
                          updateNotificationForm("email", e.target.checked)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Notifications push
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Recevez des notifications en temps réel sur votre
                        appareil.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationForm.push}
                        onChange={(e) =>
                          updateNotificationForm("push", e.target.checked)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Notifications SMS
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Recevez des notifications importantes par SMS.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationForm.sms}
                        onChange={(e) =>
                          updateNotificationForm("sms", e.target.checked)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <h3 className="font-medium text-gray-900">Newsletter</h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Recevez nos newsletters et informations marketing.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notificationForm.newsletter}
                        onChange={(e) =>
                          updateNotificationForm("newsletter", e.target.checked)
                        }
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                          Enregistrement...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Enregistrer les préférences
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      case "payment":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Méthodes de paiement
              </h2>
              <p className="text-gray-600 mb-4">
                Gérez vos méthodes de paiement pour les transactions sur
                PixelPro.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-blue-600"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="4"
                          fill="currentColor"
                        />
                        <path d="M9 20H23V10H9V20Z" fill="white" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Visa se terminant par 4242
                      </p>
                      <p className="text-xs text-gray-500">Expire en 05/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-3">
                      Par défaut
                    </span>
                    <button className="text-gray-400 hover:text-gray-500">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-8 w-8 text-orange-500"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="4"
                          fill="currentColor"
                        />
                        <path
                          d="M12 21H20M16 21V9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Mastercard se terminant par 8888
                      </p>
                      <p className="text-xs text-gray-500">Expire en 12/2024</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>

              <button className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                <CreditCard className="h-4 w-4 mr-2" />
                Ajouter une méthode de paiement
              </button>
            </div>

            {user.isPhotographer && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Informations de facturation
                </h2>
                <p className="text-gray-600 mb-4">
                  Ces informations apparaîtront sur vos factures et reçus.
                </p>

                <form>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nom de l'entreprise ou statut (optionnel)
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        placeholder="Ex: Auto-entrepreneur, SARL, etc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="tax-id"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Numéro SIRET ou TVA (optionnel)
                      </label>
                      <input
                        type="text"
                        id="tax-id"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        placeholder="Ex: 123 456 789 00012"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            )}

            {user.isPhotographer && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Informations de versement
                </h2>
                <p className="text-gray-600 mb-4">
                  Configurez comment vous souhaitez recevoir vos paiements.
                </p>

                <div className="py-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Coordonnées bancaires
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Ajoutez un compte bancaire pour recevoir vos paiements de
                    manière sécurisée.
                  </p>

                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    <Wallet className="h-4 w-4 mr-2" />
                    Configurer le compte de versement
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case "privacy":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Paramètres de confidentialité
              </h2>
              <p className="text-gray-600 mb-4">
                Gérez qui peut voir vos informations et comment elles sont
                utilisées.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-medium text-gray-900">Profil public</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Permettre aux utilisateurs de voir votre profil et vos
                      informations publiques.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={true}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Visibilité du numéro de téléphone
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Afficher votre numéro de téléphone aux utilisateurs
                      connectés.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={false}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Indexation par les moteurs de recherche
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Autoriser les moteurs de recherche à indexer votre profil
                      public.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={true}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Localisation précise
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Afficher votre localisation précise ou seulement votre
                      ville.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={false}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Données personnelles
              </h2>
              <p className="text-gray-600 mb-4">
                Gérez les données que nous conservons à votre sujet.
              </p>

              <div className="space-y-4">
                <div className="py-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Télécharger vos données
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Vous pouvez télécharger une copie de toutes les données que
                    nous avons concernant votre compte.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    <svg
                      className="h-4 w-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Télécharger mes données
                  </button>
                </div>

                <div className="py-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Suppression du compte
                  </h3>
                  <p className="text-gray-600 mb-3">
                    La suppression de votre compte est définitive. Toutes vos
                    données seront effacées et vous ne pourrez plus accéder à
                    votre compte.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Supprimer mon compte
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "help":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Centre d'aide</h2>
              <p className="text-gray-600 mb-6">
                Vous avez des questions ou besoin d'assistance ? Nous sommes là
                pour vous aider.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <HelpCircle className="h-8 w-8 text-teal-600 mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">FAQ</h3>
                  <p className="text-gray-600 mb-4">
                    Trouvez des réponses aux questions fréquemment posées.
                  </p>
                  <Link
                    href="/faq"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Consulter la FAQ
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <Mail className="h-8 w-8 text-teal-600 mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">
                    Contacter le support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Notre équipe est disponible pour répondre à vos questions.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800"
                  >
                    Contacter le support
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-medium text-gray-900 mb-4">
                  Ressources utiles
                </h3>

                <div className="space-y-3">
                  <Link
                    href="/how-it-works"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <div className="mr-3 flex-shrink-0">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <span>Comment fonctionne PixelPro</span>
                  </Link>

                  <Link
                    href="/terms"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <div className="mr-3 flex-shrink-0">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <span>Conditions générales d'utilisation</span>
                  </Link>

                  <Link
                    href="/privacy-policy"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <div className="mr-3 flex-shrink-0">
                      <Shield className="h-5 w-5 text-gray-400" />
                    </div>
                    <span>Politique de confidentialité</span>
                  </Link>

                  <Link
                    href="/help/photographer-guide"
                    className="flex items-center text-gray-600 hover:text-teal-600"
                  >
                    <div className="mr-3 flex-shrink-0">
                      <Camera className="h-5 w-5 text-gray-400" />
                    </div>
                    <span>Guide du photographe</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
                        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md w-full ${
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
            )}

            {/* Sidebar pour desktop */}
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
