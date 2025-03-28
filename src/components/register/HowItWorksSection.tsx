"use client";

import { Check, ChevronUp, ChevronDown } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4
          "
          >
            Comment ça marche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoindre ViewPoint et commencer à trouver des clients est simple et
            rapide.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-12 relative">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Créez votre profil
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Inscrivez-vous gratuitement et créez un profil professionnel
                    mettant en valeur vos compétences, votre expérience et votre
                    portfolio.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Ajoutez vos meilleures photos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Précisez vos spécialités et tarifs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Indiquez votre zone géographique
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Trouvez des projets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Parcourez les projets publiés par les clients et filtrez-les
                    selon vos spécialités, votre localisation et vos
                    disponibilités.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Recevez des alertes personnalisées
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Filtrez selon vos critères
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Consultez les détails des projets
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:order-1">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Proposez vos services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Envoyez des propositions personnalisées aux clients dont les
                    projets vous intéressent. Présentez votre approche, votre
                    tarif et vos disponibilités.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Créez des devis professionnels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Échangez avec les clients
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Partagez des exemples pertinents
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:order-2">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Réalisez les projets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Une fois votre proposition acceptée, réalisez la prestation
                    selon les termes convenus. Livrez les photos via notre
                    plateforme et recevez votre paiement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Paiement sécurisé garanti
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Livraison de fichiers intégrée
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Collectez des avis positifs
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:order-1">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
