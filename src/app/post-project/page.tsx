"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  HelpCircle,
  Info,
  MapPin,
  Upload,
} from "lucide-react";

export default function PostProjectPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Publiez votre projet de photographie
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Décrivez votre projet et trouvez le photographe idéal pour le
            réaliser
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-teal-600">
                    Étape {step} sur {totalSteps}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-teal-600">
                    {Math.round((step / totalSteps) * 100)}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-teal-100">
                <div
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-600 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
            {/* Step 1: Project Information */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations générales
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="project-title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Titre du projet *
                    </label>
                    <input
                      type="text"
                      id="project-title"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Ex: Photographe pour mariage champêtre en Provence"
                      required
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Choisissez un titre clair qui décrit votre projet
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="project-type"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      required
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="wedding">Mariage</option>
                      <option value="portrait">Portrait / Famille</option>
                      <option value="event">Événement</option>
                      <option value="product">Produit / E-commerce</option>
                      <option value="real-estate">Immobilier</option>
                      <option value="corporate">Corporate</option>
                      <option value="fashion">Mode</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Spécialités requises *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="portrait"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="portrait"
                            className="font-medium text-gray-700"
                          >
                            Portrait
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="wedding"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="wedding"
                            className="font-medium text-gray-700"
                          >
                            Mariage
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="event"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="event"
                            className="font-medium text-gray-700"
                          >
                            Événement
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="product"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="product"
                            className="font-medium text-gray-700"
                          >
                            Produit
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="real-estate"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="real-estate"
                            className="font-medium text-gray-700"
                          >
                            Immobilier
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="fashion"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="fashion"
                            className="font-medium text-gray-700"
                          >
                            Mode
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="food"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="food"
                            className="font-medium text-gray-700"
                          >
                            Culinaire
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="landscape"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="landscape"
                            className="font-medium text-gray-700"
                          >
                            Paysage
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="other"
                            name="specialties"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="other"
                            className="font-medium text-gray-700"
                          >
                            Autre
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="project-description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description du projet *
                    </label>
                    <textarea
                      id="project-description"
                      rows={5}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Décrivez votre projet en détail..."
                      required
                    ></textarea>
                    <p className="mt-1 text-sm text-gray-500">
                      Décrivez votre projet, vos attentes et toute information
                      pertinente pour les photographes
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location and Date */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Lieu et date
                </h2>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Lieu du projet *
                    </label>
                    <div className="flex items-center">
                      <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                          placeholder="Ville, code postal ou adresse"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="project-date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Date du projet *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="project-date"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="date-flexibility"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Flexibilité de date
                      </label>
                      <select
                        id="date-flexibility"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      >
                        <option value="fixed">
                          Date fixe (non négociable)
                        </option>
                        <option value="flexible-days">
                          Flexible (quelques jours)
                        </option>
                        <option value="flexible-week">
                          Flexible (1 semaine)
                        </option>
                        <option value="flexible-month">
                          Flexible (1 mois)
                        </option>
                        <option value="to-be-determined">
                          À déterminer avec le photographe
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="project-duration"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Durée estimée *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="project-duration"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                          required
                        >
                          <option value="">Sélectionnez une durée</option>
                          <option value="1-2h">1-2 heures</option>
                          <option value="half-day">Demi-journée (4h)</option>
                          <option value="full-day">
                            Journée complète (8h)
                          </option>
                          <option value="multiple-days">Plusieurs jours</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="multiple-days"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nombre de jours (si plusieurs jours)
                      </label>
                      <input
                        type="number"
                        id="multiple-days"
                        min="2"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        placeholder="Ex: 2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location-details"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Détails sur le lieu
                    </label>
                    <textarea
                      id="location-details"
                      rows={3}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Informations complémentaires sur le lieu (accès, parking, contraintes...)"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Budget and Requirements */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Budget et exigences
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Budget *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="min-budget" className="sr-only">
                          Budget minimum
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">€</span>
                          </div>
                          <input
                            type="number"
                            id="min-budget"
                            className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Min"
                            aria-describedby="budget-currency"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="max-budget" className="sr-only">
                          Budget maximum
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">€</span>
                          </div>
                          <input
                            type="number"
                            id="max-budget"
                            className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Max"
                            aria-describedby="budget-currency"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Indiquez une fourchette de budget pour votre projet
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="budget-type"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Type de budget
                    </label>
                    <select
                      id="budget-type"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                      <option value="total">Budget total</option>
                      <option value="daily">Budget journalier</option>
                      <option value="hourly">Budget horaire</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Livrables attendus *
                    </label>
                    <div className="space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="digital-files"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="digital-files"
                            className="font-medium text-gray-700"
                          >
                            Fichiers numériques haute résolution
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="edited-photos"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="edited-photos"
                            className="font-medium text-gray-700"
                          >
                            Photos retouchées
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="prints"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="prints"
                            className="font-medium text-gray-700"
                          >
                            Tirages papier
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="album"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="album"
                            className="font-medium text-gray-700"
                          >
                            Album photo
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="raw-files"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="raw-files"
                            className="font-medium text-gray-700"
                          >
                            Fichiers RAW
                          </label>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="other-deliverables"
                            name="deliverables"
                            type="checkbox"
                            className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="other-deliverables"
                            className="font-medium text-gray-700"
                          >
                            Autre (précisez dans les exigences spécifiques)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="specific-requirements"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Exigences spécifiques
                    </label>
                    <textarea
                      id="specific-requirements"
                      rows={4}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Précisez vos exigences spécifiques (style de photographie, équipement requis, nombre de photos attendues, etc.)"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: References and Submission */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Références et finalisation
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Images de référence (optionnel)
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                          >
                            <span>Télécharger des fichiers</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                            />
                          </label>
                          <p className="pl-1">ou glisser-déposer</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF jusqu'à 10MB
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Ajoutez des images pour illustrer le style que vous
                      recherchez
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="reference-links"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Liens de référence (optionnel)
                    </label>
                    <textarea
                      id="reference-links"
                      rows={3}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Ajoutez des liens vers des portfolios, des sites web ou des réseaux sociaux qui illustrent le style que vous recherchez"
                    ></textarea>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-md border border-teal-100">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-teal-800">
                          Informations importantes
                        </h3>
                        <div className="mt-2 text-sm text-teal-700">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Votre projet sera visible par les photographes
                              inscrits sur notre plateforme
                            </li>
                            <li>
                              Vous recevrez des propositions de photographes
                              intéressés par votre projet
                            </li>
                            <li>
                              Vous pourrez échanger avec les photographes avant
                              de faire votre choix
                            </li>
                            <li>
                              Le paiement s'effectue de manière sécurisée via
                              notre plateforme
                            </li>
                            <li>
                              Nous offrons une garantie satisfaction pour tous
                              les projets
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Besoin d'aide ?
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            Si vous avez des questions ou besoin d'assistance
                            pour publier votre projet, n'hésitez pas à contacter
                            notre équipe de support au{" "}
                            <a
                              href="tel:+33123456789"
                              className="font-medium underline"
                            >
                              01 23 45 67 89
                            </a>{" "}
                            ou par email à{" "}
                            <a
                              href="mailto:support@pixelpro.fr"
                              className="font-medium underline"
                            >
                              support@pixelpro.fr
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-medium text-gray-700"
                      >
                        J'accepte les{" "}
                        <a
                          href="/terms"
                          className="text-teal-600 hover:text-teal-500"
                        >
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a
                          href="/privacy"
                          className="text-teal-600 hover:text-teal-500"
                        >
                          politique de confidentialité
                        </a>{" "}
                        *
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                step === 1 ? "invisible" : ""
              }`}
            >
              Précédent
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Publier le projet
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
