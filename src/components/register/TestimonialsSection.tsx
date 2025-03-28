"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent nos photographes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de photographes qui ont développé leur
            activité grâce à ViewPoint.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Thomas Martin"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Thomas Martin</h4>
                <p className="text-gray-500 text-sm">
                  Photographe mariage & couple
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Depuis que j'ai rejoint PixelPro, mon carnet de commandes est
              plein. La plateforme m'a permis de trouver des clients que je
              n'aurais jamais pu atteindre par mes propres moyens. Le système de
              paiement sécurisé me donne une tranquillité d'esprit."
            </p>
            <p className="text-sm text-gray-500 mt-4">Membre depuis 2 ans</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Sophie Dubois"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Sophie Dubois</h4>
                <p className="text-gray-500 text-sm">
                  Photographe portrait & événements
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "PixelPro a transformé mon activité de photographe. Je peux me
              concentrer sur mon art pendant que la plateforme s'occupe de
              trouver des clients et de gérer les aspects administratifs. Les
              contrats prêts à l'emploi sont un vrai gain de temps."
            </p>
            <p className="text-sm text-gray-500 mt-4">Membre depuis 18 mois</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Lucas Bernard"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Lucas Bernard</h4>
                <p className="text-gray-500 text-sm">
                  Photographe culinaire & produit
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "En tant que photographe spécialisé, il était difficile de trouver
              des clients dans mon créneau. Grâce à PixelPro, je reçois des
              demandes ciblées pour des projets qui correspondent parfaitement à
              mes compétences. Mon chiffre d'affaires a augmenté de 40% !"
            </p>
            <p className="text-sm text-gray-500 mt-4">Membre depuis 1 an</p>
          </div>
        </div>
      </div>
    </section>
  );
}
