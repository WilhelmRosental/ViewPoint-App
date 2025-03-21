"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  CreditCard,
  FileText,
  HelpCircle,
  MessageSquare,
  Star,
  ThumbsUp,
} from "lucide-react";

export default function HowItWorksPage() {
  // État pour gérer les onglets actifs
  const [activeTab, setActiveTab] = useState<"clients" | "photographers">(
    "clients"
  );

  // État pour gérer les questions FAQ ouvertes
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]); // Premier élément ouvert par défaut

  // Fonction pour basculer l'état d'une question FAQ
  const toggleFAQ = (index: number) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter((item) => item !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Comment fonctionne PixelPro ?
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Découvrez comment notre plateforme connecte les clients avec les
            meilleurs photographes professionnels pour tous types de projets
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Une plateforme simple et efficace
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PixelPro simplifie la mise en relation entre clients et
              photographes professionnels. Que vous cherchiez un photographe
              pour votre projet ou que vous soyez un photographe à la recherche
              de nouvelles opportunités, notre plateforme vous offre une
              solution complète.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <div className="border-b border-gray-200">
              <nav
                className="-mb-px flex justify-center space-x-8"
                aria-label="Tabs"
              >
                <button
                  onClick={() => setActiveTab("clients")}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base ${
                    activeTab === "clients"
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Pour les clients
                </button>
                <button
                  onClick={() => setActiveTab("photographers")}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base ${
                    activeTab === "photographers"
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Pour les photographes
                </button>
              </nav>
            </div>
          </div>

          {/* For Clients Section */}
          {activeTab === "clients" && (
            <div id="for-clients" className="mb-20 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Pour les clients
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div>
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Publiez votre projet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Décrivez votre projet en détail : type de photographie,
                    lieu, date, budget et exigences spécifiques. Plus votre
                    description est précise, plus vous attirerez des
                    photographes qualifiés.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Formulaire simple et guidé
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Possibilité d'ajouter des images de référence
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Publication gratuite et sans engagement
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/post-project"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                    >
                      Publier un projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Publication de projet"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Sélection de photographes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Recevez des propositions
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Les photographes intéressés par votre projet vous envoient
                    leurs propositions, incluant leur tarif, leur disponibilité
                    et leur approche. Vous pouvez également parcourir notre
                    annuaire de photographes et les contacter directement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Notifications par email des nouvelles propositions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Accès aux portfolios et avis des photographes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Possibilité de filtrer par spécialité, tarif et
                        localisation
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/photographers"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                    >
                      Explorer les photographes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div>
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Échangez et choisissez
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discutez avec les photographes qui vous intéressent pour
                    affiner votre projet, poser des questions et négocier les
                    détails. Choisissez celui qui correspond le mieux à vos
                    attentes et à votre budget.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Messagerie intégrée sécurisée
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Possibilité d'organiser des appels vidéo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Devis détaillés et personnalisés
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Échange avec les photographes"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Réalisation du projet"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Réalisez votre projet en toute sécurité
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Une fois votre choix fait, confirmez la réservation et
                    effectuez le paiement via notre plateforme sécurisée. Le
                    photographe réalise la prestation et vous livre les photos
                    selon les termes convenus.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Paiement sécurisé avec libération des fonds après
                        validation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Contrat automatique protégeant les deux parties
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Garantie satisfaction et support client dédié
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* For Photographers Section */}
          {activeTab === "photographers" && (
            <div id="for-photographers" className="mb-20 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Pour les photographes
              </h2>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div>
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Créez votre profil professionnel
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Inscrivez-vous gratuitement et créez un profil attractif
                    mettant en valeur vos compétences, votre expérience et votre
                    portfolio. Un profil complet augmente vos chances d'être
                    contacté par des clients.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Inscription gratuite et sans engagement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Galerie photo illimitée pour votre portfolio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Personnalisation complète de votre profil
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/register"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                    >
                      Créer un compte photographe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Création de profil photographe"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Recherche de projets"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Trouvez des projets qui vous correspondent
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Parcourez les projets publiés par les clients et filtrez-les
                    selon vos spécialités, votre localisation et vos
                    disponibilités. Recevez des alertes personnalisées pour les
                    nouveaux projets qui correspondent à votre profil.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Accès à tous les projets publiés sur la plateforme
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Filtres avancés pour trouver les projets pertinents
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Notifications personnalisées par email
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                    >
                      Voir les projets disponibles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                <div>
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Proposez vos services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Envoyez des propositions personnalisées aux clients dont les
                    projets vous intéressent. Présentez votre approche, votre
                    tarif et vos disponibilités de manière claire et
                    professionnelle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Outils de création de devis professionnels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Messagerie directe avec les clients
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Possibilité de partager des exemples de travaux
                        similaires
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Proposition de services"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Réalisation et paiement"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Réalisez la prestation et recevez votre paiement
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Une fois votre proposition acceptée, réalisez la prestation
                    selon les termes convenus. Livrez les photos via notre
                    plateforme et recevez votre paiement de manière sécurisée et
                    rapide.
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
                        Outil de livraison de fichiers intégré
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Système d'avis pour développer votre réputation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Our Guarantees */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nos garanties
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Garantie satisfaction
                </h3>
                <p className="text-gray-600">
                  Si vous n'êtes pas satisfait de la prestation, nous vous
                  remboursons intégralement. Notre priorité est votre
                  satisfaction.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Paiement sécurisé
                </h3>
                <p className="text-gray-600">
                  Tous les paiements sont sécurisés et les fonds ne sont libérés
                  qu'après validation de la livraison par le client.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Contrats protecteurs
                </h3>
                <p className="text-gray-600">
                  Chaque projet est encadré par un contrat clair qui protège les
                  droits et définit les obligations des deux parties.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  question: "Combien coûte l'utilisation de la plateforme ?",
                  answer:
                    "L'inscription et la publication de projets sont entièrement gratuites. PixelPro prélève une commission de 10% sur le montant des projets réalisés via la plateforme. Cette commission couvre les frais de transaction, la garantie satisfaction et le support client.",
                },
                {
                  question: "Comment sont sélectionnés les photographes ?",
                  answer:
                    "Tous les photographes passent par un processus de vérification qui inclut la validation de leur identité, de leurs compétences et de leur expérience professionnelle. Nous vérifions également la qualité de leur portfolio et leurs références. Notre système d'avis permet ensuite aux clients de noter les photographes après chaque projet.",
                },
                {
                  question: "Que se passe-t-il en cas d'annulation ?",
                  answer:
                    "Notre politique d'annulation est claire et équitable. Si le client annule plus de 7 jours avant la date prévue, il est intégralement remboursé. Entre 7 jours et 48h, des frais de 30% sont retenus. Moins de 48h avant, des frais de 50% sont appliqués. Si le photographe annule, nous aidons le client à trouver rapidement un remplaçant et offrons une réduction sur le prochain projet.",
                },
                {
                  question: "Comment fonctionne la garantie satisfaction ?",
                  answer:
                    "Si vous n'êtes pas satisfait de la prestation, vous disposez de 7 jours après la livraison pour nous le signaler. Notre équipe examine votre demande et, si elle est justifiée, vous propose soit un remboursement intégral, soit une nouvelle séance avec un autre photographe. Notre objectif est de garantir votre entière satisfaction.",
                },
                {
                  question: "Quels types de projets peut-on publier ?",
                  answer:
                    "Vous pouvez publier tous types de projets photographiques : mariages, portraits, événements d'entreprise, shootings produits, photos immobilières, mode, etc. Notre plateforme couvre l'ensemble des besoins en photographie professionnelle, pour les particuliers comme pour les entreprises.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {openFAQs.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  <div
                    className={`px-6 py-4 bg-gray-50 border-t border-gray-200 transition-all duration-300 ${
                      openFAQs.includes(index) ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
              >
                Voir toutes les questions fréquentes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Témoignages
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Marie Dupont</h4>
                    <div className="flex">
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
                  "J'ai trouvé le photographe parfait pour mon mariage en moins
                  de 48h. Le processus était simple et transparent. Les photos
                  sont magnifiques et le service était impeccable. Je recommande
                  vivement PixelPro !"
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Client pour un projet de mariage
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Photographe"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Thomas Martin</h4>
                    <div className="flex">
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
                  "En tant que photographe freelance, PixelPro m'a permis de
                  développer mon activité et de trouver de nouveaux clients
                  régulièrement. La plateforme est intuitive et le système de
                  paiement sécurisé me donne une tranquillité d'esprit."
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Photographe spécialisé en mariage et portrait
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-teal-50 rounded-lg p-8 border border-teal-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à commencer ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Rejoignez des milliers de clients et photographes qui utilisent
                déjà PixelPro pour leurs projets photographiques.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/post-project"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  Publier un projet
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 border border-teal-600 text-base font-medium rounded-md shadow-sm text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  Devenir photographe
                </Link>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Besoin d'aide ?
            </h2>
            <p className="text-gray-600 mb-4 max-w-xl mx-auto">
              Notre équipe de support est disponible pour répondre à toutes vos
              questions et vous accompagner dans votre utilisation de la
              plateforme.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:support@pixelpro.fr"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              >
                <MessageSquare className="h-5 w-5 mr-2 text-gray-400" />
                support@pixelpro.fr
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer would go here */}
    </div>
  );
}

// Ajoutez ces styles à votre fichier globals.css
// .animate-fadeIn {
//   animation: fadeIn 0.5s ease-in-out;
// }
//
// @keyframes fadeIn {
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
