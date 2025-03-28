"use client";

import { Lock, Save, Loader2, X, LogOut } from "lucide-react";

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Modifier le mot de passe</h2>
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
                Le mot de passe doit contenir au moins 8 caractères, dont une
                majuscule, un chiffre et un caractère spécial.
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
          supplémentaire à votre compte en exigeant un code de vérification en
          plus de votre mot de passe.
        </p>

        <div className="flex justify-between items-center py-4 border-t border-gray-200">
          <div>
            <h3 className="font-medium text-gray-900">État</h3>
            <p className="text-gray-500 text-sm mt-1">
              L'authentification à deux facteurs est actuellement désactivée.
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
          Ci-dessous se trouvent les appareils qui sont actuellement connectés à
          votre compte. Déconnectez ceux que vous ne reconnaissez pas.
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-4 border-t border-gray-200">
            <div className="flex items-start">
              {/* ...existing svg icon... */}
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
              {/* ...existing svg icon... */}
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
}
