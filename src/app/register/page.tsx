"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  FileText,
  HelpCircle,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

export default function BecomePhotographerPage() {
  // État pour gérer les étapes du formulaire d'inscription
  const [formStep, setFormStep] = useState(1);
  const totalFormSteps = 3;

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

  // Fonction pour passer à l'étape suivante du formulaire
  const nextStep = () => {
    if (formStep < totalFormSteps) {
      setFormStep(formStep + 1);
      window.scrollTo({
        top: document.getElementById("registration-form")?.offsetTop || 0,
        behavior: "smooth",
      });
    }
  };

  // Fonction pour revenir à l'étape précédente du formulaire
  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Développez votre activité de photographe avec ViewPoint
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Rejoignez notre communauté de photographes professionnels et
              trouvez de nouveaux clients pour vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
              >
                S'inscrire maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
              >
                Comment ça marche
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                10,000+
              </div>
              <p className="text-gray-700">
                Clients actifs à la recherche de photographes
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">€2M+</div>
              <p className="text-gray-700">
                Versés aux photographes l'année dernière
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">0%</div>
              <p className="text-gray-700">
                Frais d'inscription pour les photographes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Utilisez nos modèles de contrats professionnels pour protéger
                vos droits et clarifier les termes de vos prestations.
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoindre ViewPoint et commencer à trouver des clients est simple
              et rapide.
            </p>
          </div>

          <div className="relative">
            {/* Ligne de connexion verticale */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-100 hidden md:block"></div>

            <div className="space-y-12 relative">
              {/* Étape 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      1. Créez votre profil
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Inscrivez-vous gratuitement et créez un profil
                      professionnel mettant en valeur vos compétences, votre
                      expérience et votre portfolio.
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
                      Parcourez les projets publiés par les clients et
                      filtrez-les selon vos spécialités, votre localisation et
                      vos disponibilités.
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
                      Envoyez des propositions personnalisées aux clients dont
                      les projets vous intéressent. Présentez votre approche,
                      votre tarif et vos disponibilités.
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
                      Une fois votre proposition acceptée, réalisez la
                      prestation selon les termes convenus. Livrez les photos
                      via notre plateforme et recevez votre paiement.
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

      {/* Testimonials Section */}
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
                n'aurais jamais pu atteindre par mes propres moyens. Le système
                de paiement sécurisé me donne une tranquillité d'esprit."
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
              <p className="text-sm text-gray-500 mt-4">
                Membre depuis 18 mois
              </p>
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
                "En tant que photographe spécialisé, il était difficile de
                trouver des clients dans mon créneau. Grâce à PixelPro, je
                reçois des demandes ciblées pour des projets qui correspondent
                parfaitement à mes compétences. Mon chiffre d'affaires a
                augmenté de 40% !"
              </p>
              <p className="text-sm text-gray-500 mt-4">Membre depuis 1 an</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir avant de rejoindre notre communauté
              de photographes.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                question: "Combien coûte l'inscription sur PixelPro ?",
                answer:
                  "L'inscription sur PixelPro est entièrement gratuite pour les photographes. Nous prélevons uniquement une commission de 10% sur les projets réalisés via notre plateforme. Cette commission couvre les frais de transaction, la garantie satisfaction et le support client.",
              },
              {
                question: "Comment sont sélectionnés les photographes ?",
                answer:
                  "Tous les photographes passent par un processus de vérification qui inclut la validation de leur identité, de leurs compétences et de leur expérience professionnelle. Nous vérifions également la qualité de votre portfolio. Ce processus nous permet de maintenir un haut niveau de qualité sur notre plateforme.",
              },
              {
                question:
                  "Quand et comment suis-je payé pour mes prestations ?",
                answer:
                  "Le client effectue le paiement sur notre plateforme avant la prestation. Les fonds sont conservés en sécurité et vous sont versés 7 jours après la livraison des photos, une fois que le client a confirmé sa satisfaction. Les paiements sont effectués directement sur votre compte bancaire.",
              },
              {
                question: "Puis-je définir mes propres tarifs ?",
                answer:
                  "Absolument ! Vous avez un contrôle total sur vos tarifs. Vous pouvez définir différents tarifs selon le type de prestation, la durée, ou d'autres critères. Vous pouvez également ajuster vos tarifs à tout moment depuis votre tableau de bord.",
              },
              {
                question:
                  "Comment gérer mon emploi du temps sur la plateforme ?",
                answer:
                  "PixelPro vous offre un calendrier intégré que vous pouvez synchroniser avec votre agenda personnel. Vous pouvez bloquer les dates où vous n'êtes pas disponible et gérer vos rendez-vous directement depuis la plateforme. Cela vous permet d'éviter les doubles réservations.",
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
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rejoignez notre communauté de photographes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Créez votre compte gratuitement et commencez à trouver de nouveaux
              clients dès aujourd'hui.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-teal-600">
                  Étape {formStep} sur {totalFormSteps}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-teal-600">
                  {Math.round((formStep / totalFormSteps) * 100)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-100">
              <div
                style={{ width: `${(formStep / totalFormSteps) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-600 transition-all duration-500"
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Step 1: Personal Information */}
            {formStep === 1 && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Informations personnelles
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mot de passe *
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    8 caractères minimum, avec au moins une majuscule, un
                    chiffre et un caractère spécial
                  </p>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirmer le mot de passe *
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {formStep === 2 && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Informations professionnelles
                </h3>

                <div className="mb-6">
                  <label
                    htmlFor="business-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom professionnel / Entreprise
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Localisation *
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Ville, Code postal"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Spécialités *
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

                <div className="mb-6">
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Expérience *
                  </label>
                  <select
                    id="experience"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  >
                    <option value="">
                      Sélectionnez votre niveau d'expérience
                    </option>
                    <option value="less-than-2">Moins de 2 ans</option>
                    <option value="2-5">2 à 5 ans</option>
                    <option value="5-10">5 à 10 ans</option>
                    <option value="more-than-10">Plus de 10 ans</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="daily-rate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tarif journalier indicatif (€) *
                  </label>
                  <input
                    type="number"
                    id="daily-rate"
                    min="0"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Vous pourrez définir des tarifs détaillés par type de
                    prestation ultérieurement
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Portfolio and Terms */}
            {formStep === 3 && (
              <div className="animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Portfolio et conditions
                </h3>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photos de portfolio (minimum 3) *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
                        PNG, JPG jusqu'à 10MB
                      </p>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Choisissez vos meilleures photos pour mettre en valeur votre
                    travail
                  </p>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Biographie professionnelle *
                  </label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Présentez-vous, votre parcours et votre approche photographique..."
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Site web (optionnel)
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="https://www.votresite.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Instagram (optionnel)
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      instagram.com/
                    </span>
                    <input
                      type="text"
                      id="instagram"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="votre_compte"
                    />
                  </div>
                </div>

                <div className="mb-6">
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

                <div className="mb-6">
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="newsletter"
                        className="font-medium text-gray-700"
                      >
                        Je souhaite recevoir des conseils et actualités par
                        email
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200 ${
                  formStep === 1 ? "invisible" : ""
                }`}
              >
                Précédent
              </button>

              {formStep < totalFormSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  Suivant
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  Créer mon compte
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Prêt à développer votre activité ?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Rejoignez des milliers de photographes qui ont déjà transformé leur
            passion en activité florissante grâce à ViewPoint.
          </p>
          <a
            href="#registration-form"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white transition-colors duration-200"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Des questions ?
          </h2>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            Notre équipe est disponible pour vous aider dans votre inscription
            et répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:photographes@pixelpro.fr"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5 mr-2 text-gray-400" />
              photographes@viewpoint.fr
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
      </section>
    </div>
  );
}
