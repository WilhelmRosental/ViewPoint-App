"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  MapPin,
  Search,
  Sliders,
  Tag,
  Users,
} from "lucide-react";

export default function Projects() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Projets de photographie disponibles
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Trouvez des opportunités de projets photo et proposez vos services
              aux clients
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  <Filter className="h-5 w-5 mr-2 text-gray-500" />
                  Filtres
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      filtersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <Sliders className="h-5 w-5 mr-2 text-gray-500" />
                  Trier par
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {filtersOpen && (
              <div className="grid md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type de projet
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>Tous les types</option>
                    <option>Portrait</option>
                    <option>Mariage</option>
                    <option>Événement</option>
                    <option>Produit</option>
                    <option>Immobilier</option>
                    <option>Mode</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>Tous les budgets</option>
                    <option>Moins de 200€</option>
                    <option>200€ - 500€</option>
                    <option>500€ - 1000€</option>
                    <option>1000€ - 2000€</option>
                    <option>Plus de 2000€</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>Toutes les villes</option>
                    <option>Paris</option>
                    <option>Lyon</option>
                    <option>Marseille</option>
                    <option>Bordeaux</option>
                    <option>Lille</option>
                    <option>Toulouse</option>
                    <option>Nantes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date du projet
                  </label>
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                    <option>Toutes les dates</option>
                    <option>Cette semaine</option>
                    <option>Ce mois-ci</option>
                    <option>Dans les 3 mois</option>
                    <option>Dans plus de 3 mois</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <p className="text-gray-600 mb-2 md:mb-0">
              <span className="font-semibold text-gray-900">127</span> projets
              disponibles
            </p>
            <Link
              href="/post-project"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Publier un projet
            </Link>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        Nouveau
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Mariage
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/projects/1" className="hover:text-teal-600">
                        Photographe pour mariage champêtre en Provence
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Nous recherchons un photographe pour notre mariage qui
                      aura lieu dans un domaine viticole en Provence. Nous
                      souhaitons un style naturel et authentique pour capturer
                      l'ambiance champêtre de notre journée spéciale.
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Aix-en-Provence, France</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>15 juin 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Journée complète (10h)</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="font-medium text-teal-700">
                          1200€ - 1800€
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        8 propositions
                      </span>
                    </div>
                    <Link
                      href="/projects/1"
                      className="inline-flex items-center px-4 py-2 border border-teal-600 rounded-md text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Voir les détails
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Client"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Marie et Thomas
                      </p>
                      <p className="text-xs text-gray-500">
                        Publié il y a 2 jours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2">
                        Événement
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/projects/2" className="hover:text-teal-600">
                        Photographe pour soirée de lancement de produit
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Notre startup organise une soirée de lancement pour notre
                      nouveau produit tech. Nous avons besoin d'un photographe
                      pour capturer l'ambiance de l'événement, les moments clés
                      et quelques portraits professionnels de l'équipe.
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Paris, France</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>5 avril 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Soirée (4h)</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="font-medium text-teal-700">
                          600€ - 800€
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        12 propositions
                      </span>
                    </div>
                    <Link
                      href="/projects/2"
                      className="inline-flex items-center px-4 py-2 border border-teal-600 rounded-md text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Voir les détails
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Client"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        TechStart SAS
                      </p>
                      <p className="text-xs text-gray-500">
                        Publié il y a 5 jours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                        Produit
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/projects/3" className="hover:text-teal-600">
                        Shooting photo pour collection de bijoux artisanaux
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Je suis une créatrice de bijoux artisanaux et je recherche
                      un photographe spécialisé dans la photographie de produits
                      pour mettre en valeur ma nouvelle collection. J'ai besoin
                      d'environ 30 photos de haute qualité pour mon site
                      e-commerce.
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Lyon, France</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Flexible (avant fin mars)</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Demi-journée</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="font-medium text-teal-700">
                          400€ - 600€
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        5 propositions
                      </span>
                    </div>
                    <Link
                      href="/projects/3"
                      className="inline-flex items-center px-4 py-2 border border-teal-600 rounded-md text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Voir les détails
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Client"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Lucie Martin
                      </p>
                      <p className="text-xs text-gray-500">
                        Publié il y a 1 semaine
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                        Portrait
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href="/projects/4" className="hover:text-teal-600">
                        Séance photo professionnelle pour équipe de startup
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Nous sommes une équipe de 12 personnes et nous avons
                      besoin de photos professionnelles pour notre site web et
                      nos réseaux sociaux. Nous recherchons un style moderne et
                      décontracté qui reflète notre culture d'entreprise
                      dynamique.
                    </p>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Bordeaux, France</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>10 avril 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-400" />
                        <span>Journée complète</span>
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1 text-gray-400" />
                        <span className="font-medium text-teal-700">
                          800€ - 1200€
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        9 propositions
                      </span>
                    </div>
                    <Link
                      href="/projects/4"
                      className="inline-flex items-center px-4 py-2 border border-teal-600 rounded-md text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Voir les détails
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Client"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        GrowthLab
                      </p>
                      <p className="text-xs text-gray-500">
                        Publié il y a 10 jours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Précédent
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Suivant
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Affichage de <span className="font-medium">1</span> à{" "}
                  <span className="font-medium">4</span> sur{" "}
                  <span className="font-medium">127</span> résultats
                </p>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Précédent</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-teal-50 border-teal-500 text-teal-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Suivant</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-teal-50 rounded-lg p-6 border border-teal-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Vous avez un projet photo ?
                </h3>
                <p className="text-gray-600 mt-1">
                  Publiez votre projet gratuitement et recevez des propositions
                  de photographes professionnels.
                </p>
              </div>
              <Link
                href="/post-project"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 whitespace-nowrap"
              >
                Publier un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
