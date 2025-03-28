"use client";

import { Users, CreditCard, FileText, Star, Clock, Camera } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi rejoindre ViewPoint ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plateforme offre de nombreux avantages pour développer votre
            activité de photographe professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Accès à une large clientèle
            </h3>
            <p className="text-gray-600">
              Connectez-vous avec des milliers de clients à la recherche de
              photographes professionnels pour leurs projets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Paiements sécurisés
            </h3>
            <p className="text-gray-600">
              Recevez vos paiements de manière sécurisée et fiable via notre
              système de paiement intégré.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Contrats simplifiés
            </h3>
            <p className="text-gray-600">
              Utilisez nos modèles de contrats professionnels pour protéger vos
              droits et clarifier les termes de vos prestations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Système de réputation
            </h3>
            <p className="text-gray-600">
              Développez votre réputation grâce aux avis clients et augmentez
              votre visibilité sur la plateforme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Gestion simplifiée
            </h3>
            <p className="text-gray-600">
              Gérez facilement votre agenda, vos projets et vos communications
              avec les clients depuis un seul endroit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Portfolio professionnel
            </h3>
            <p className="text-gray-600">
              Créez un portfolio en ligne attrayant pour mettre en valeur vos
              meilleures réalisations et attirer de nouveaux clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
