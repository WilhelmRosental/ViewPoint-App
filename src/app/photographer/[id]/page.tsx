"use client";

import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { usePhotographerDetails } from "@/hooks/usePhotographers";

export default function PhotographerPage() {
  const params = useParams();
  const id = params?.id as string;
  const { photographer, medias, loading, error } = usePhotographerDetails(id);

  if (loading) {
    return (
      <div className="text-center my-20">Loading photographer data...</div>
    );
  }

  if (error) {
    return <div className="text-center my-20 text-red-500">{error}</div>;
  }

  if (!photographer) {
    return <div className="text-center my-20">Photographer not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Photo de profil */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Photo de profil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Informations principales */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                {photographer.firstname} {photographer.lastname}
              </h1>
              <h2 className="text-xl text-gray-600 mt-1">
                {photographer.title}
              </h2>

              {/* Localisation ajoutée ici */}
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="w-5 h-5 text-gray-500 mr-1" />
                <span>{photographer.city}, France</span>
              </div>

              <div className="flex items-center mt-3">
                <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">
                  {photographer.recommendations} recommandations
                </span>
              </div>
            </div>

            {/* Bouton de contact */}
            {/* <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-full transition-colors">
                Proposer une mission
              </button>
              <p className="text-xs text-gray-500 mt-2 max-w-xs">
                La mission ne démarrera que si vous acceptez le devis de Sophie.
              </p>
            </div> */}
          </div>

          {/* Tableau d'informations */}
          {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-4 border rounded-md overflow-hidden">
            <div className="bg-teal-700 text-white p-4">
              <p className="text-sm font-medium mb-1">Tarif indicatif</p>
              <p className="text-xl font-bold">
                250 €<span className="text-sm font-normal">/jour</span>
              </p>
            </div>
            <div className="p-4 border-b md:border-b-0 md:border-r">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Expérience
              </p>
              <p className="text-xl font-medium text-gray-800">5-10 ans</p>
            </div>
            <div className="p-4 border-b md:border-b-0 md:border-r">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Taux de réponse
              </p>
              <p className="text-xl font-medium text-gray-800">98%</p>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Temps de réponse
              </p>
              <p className="text-xl font-medium text-gray-800">24h</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Section compétences */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Spécialités
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Portrait
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Mariage
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Événements
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Mode
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Retouche
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Studio
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Extérieur
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Photoshop
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
            Lightroom
          </span>
        </div>
      </div>

      {/* Section description */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">À propos</h3>
        <p className="text-gray-700">{photographer.bio}</p>
      </div>
    </div>
  );
}
