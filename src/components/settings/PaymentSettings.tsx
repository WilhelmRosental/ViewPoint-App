"use client";

import { CreditCard, Save, Wallet } from "lucide-react";

export default function PaymentSettings() {
  // Simuler user.isPhotographer
  const isPhotographer = true;

  return (
    <div className="space-y-6">
      {/* Méthodes de paiement */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Méthodes de paiement</h2>
        <p className="text-gray-600 mb-4">
          Gérez vos méthodes de paiement pour les transactions sur PixelPro.
        </p>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* ...existing svg icon for Visa... */}
                <svg
                  className="h-8 w-8 text-blue-600"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="4" fill="currentColor" />
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
                {/* ...existing svg icon button... */}
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
                {/* ...existing svg icon for Mastercard... */}
                <svg
                  className="h-8 w-8 text-orange-500"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="4" fill="currentColor" />
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

      {isPhotographer && (
        <>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Informations de facturation
            </h2>
            <p className="text-gray-600 mb-4">
              Ces informations apparaîtront sur vos factures et reçus.
            </p>
            <form>
              <div className="grid grid-cols-1 gap-4 mb-4">
                {/* ...existing code for entreprise et numéro TVA... */}
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
        </>
      )}
    </div>
  );
}
