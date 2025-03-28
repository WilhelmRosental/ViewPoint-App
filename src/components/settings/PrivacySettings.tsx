"use client";

// ...existing imports if needed...
export default function PrivacySettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Paramètres de confidentialité
        </h2>
        <p className="text-gray-600 mb-4">
          Gérez qui peut voir vos informations et comment elles sont utilisées.
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
                Afficher votre numéro de téléphone aux utilisateurs connectés.
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
                Afficher votre localisation précise ou seulement votre ville.
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
        <h2 className="text-xl font-semibold mb-4">Données personnelles</h2>
        <p className="text-gray-600 mb-4">
          Gérez les données que nous conservons à votre sujet.
        </p>
        <div className="space-y-4">
          <div className="py-4 border-t border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">
              Télécharger vos données
            </h3>
            <p className="text-gray-600 mb-3">
              Vous pouvez télécharger une copie de toutes les données que nous
              avons concernant votre compte.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              {/* ...existing svg icon... */}
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
              La suppression de votre compte est définitive. Toutes vos données
              seront effacées et vous ne pourrez plus accéder à votre compte.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              {/* ...existing svg icon... */}
              <Trash2 className="h-4 w-4 mr-2" />
              Supprimer mon compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
