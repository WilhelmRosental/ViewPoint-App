// "use client";

// import { ArrowRight, MapPin, MessageCircle } from "lucide-react";

// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { usePhotographerDetails } from "@/hooks/usePhotographers";

// export default function PhotographerPage() {
//   const params = useParams();
//   const id = params?.id as string;
//   const { photographer, medias, loading, error } = usePhotographerDetails(id);

//   if (loading) {
//     return (
//       <div className="text-center my-20">Loading photographer data...</div>
//     );
//   }

//   if (error) {
//     return <div className="text-center my-20 text-red-500">{error}</div>;
//   }

//   if (!photographer) {
//     return <div className="text-center my-20">Photographer not found</div>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-8 items-start">
//         {/* Photo de profil */}
//         <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
//           <img
//             src="/placeholder.svg?height=200&width=200"
//             alt="Photo de profil"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Informations principales */}
//         <div className="flex-grow">
//           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-800">
//                 {photographer.firstname} {photographer.lastname}
//               </h1>
//               <h2 className="text-xl text-gray-600 mt-1">
//                 {photographer.title}
//               </h2>

//               {/* Localisation ajoutée ici */}
//               <div className="flex items-center mt-2 text-gray-600">
//                 <MapPin className="w-5 h-5 text-gray-500 mr-1" />
//                 <span>{photographer.city}, France</span>
//               </div>

//               <div className="flex items-center mt-3">
//                 <MessageCircle className="w-5 h-5 text-blue-600 mr-2" />
//                 <span className="text-gray-700">
//                   {photographer.recommendations} recommandations
//                 </span>
//               </div>
//             </div>

//             {/* Bouton de contact */}
//             {/* <div className="w-full md:w-auto">
//               <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-full transition-colors">
//                 Proposer une mission
//               </button>
//               <p className="text-xs text-gray-500 mt-2 max-w-xs">
//                 La mission ne démarrera que si vous acceptez le devis de Sophie.
//               </p>
//             </div> */}
//           </div>

//           {/* Tableau d'informations */}
//           {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-4 border rounded-md overflow-hidden">
//             <div className="bg-teal-700 text-white p-4">
//               <p className="text-sm font-medium mb-1">Tarif indicatif</p>
//               <p className="text-xl font-bold">
//                 250 €<span className="text-sm font-normal">/jour</span>
//               </p>
//             </div>
//             <div className="p-4 border-b md:border-b-0 md:border-r">
//               <p className="text-sm font-medium text-gray-500 mb-1">
//                 Expérience
//               </p>
//               <p className="text-xl font-medium text-gray-800">5-10 ans</p>
//             </div>
//             <div className="p-4 border-b md:border-b-0 md:border-r">
//               <p className="text-sm font-medium text-gray-500 mb-1">
//                 Taux de réponse
//               </p>
//               <p className="text-xl font-medium text-gray-800">98%</p>
//             </div>
//             <div className="p-4">
//               <p className="text-sm font-medium text-gray-500 mb-1">
//                 Temps de réponse
//               </p>
//               <p className="text-xl font-medium text-gray-800">24h</p>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Section compétences */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           Spécialités
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Portrait
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Mariage
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Événements
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Mode
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Retouche
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Studio
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Extérieur
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Photoshop
//           </span>
//           <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
//             Lightroom
//           </span>
//         </div>
//       </div>

//       {/* Section description */}
//       <div className="mt-8">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">À propos</h3>
//         <p className="text-gray-700">{photographer.bio}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Star,
  X,
  Search,
} from "lucide-react";

export default function PhotographerSingleProfile() {
  // État pour gérer la modal d'image
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour ouvrir la modal avec une image spécifique
  const openModal = (imageSrc: string, index: number) => {
    setCurrentImage(imageSrc);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Empêcher le défilement du body
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Réactiver le défilement du body
  };

  // Fonction pour naviguer vers l'image précédente
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex =
      (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
    setCurrentImageIndex(newIndex);
    setCurrentImage(portfolioImages[newIndex].src);
  };

  // Fonction pour naviguer vers l'image suivante
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % portfolioImages.length;
    setCurrentImageIndex(newIndex);
    setCurrentImage(portfolioImages[newIndex].src);
  };

  // Données du photographe
  const photographer = {
    name: "Alexandre Moreau",
    title: "Photographe de Mariage & Portrait",
    location: "Lyon, France",
    rating: 4.9,
    reviewCount: 42,
    dailyRate: 350,
    experience: "12 ans",
    projectsCount: 215,
    responseTime: "< 24h",
    bio: `Photographe passionné spécialisé dans les mariages et portraits depuis plus de 12 ans. Mon approche mêle photojournalisme et portraits créatifs pour capturer l'authenticité de chaque moment.

Je m'attache à raconter votre histoire à travers des images intemporelles, en saisissant les émotions et les détails qui font de chaque événement un moment unique.

Basé à Lyon, je me déplace dans toute la France et à l'international pour vos projets.`,
    specialties: [
      "Mariage",
      "Portrait",
      "Couple",
      "Engagement",
      "Famille",
      "Événements",
      "Photojournalisme",
      "Fine Art",
    ],
    equipment: [
      "Sony Alpha A1 (Boîtier principal)",
      "Sony Alpha A9 II (Boîtier secondaire)",
      "Sony 24-70mm f/2.8 GM II",
      "Sony 70-200mm f/2.8 GM OSS II",
      "Sony 85mm f/1.4 GM",
      "Sony 35mm f/1.4 GM",
      "Profoto B10 Plus (Éclairage)",
      "DJI Mavic 3 Pro (Drone)",
    ],
    services: [
      {
        name: "Mariage Complet",
        price: "À partir de 2200 €",
        description:
          "Journée complète, 2 photographes, album premium, galerie en ligne",
      },
      {
        name: "Séance Couple/Engagement",
        price: "À partir de 350 €",
        description: "2-3 heures, 50+ photos retouchées, galerie privée",
      },
      {
        name: "Séance Portrait",
        price: "À partir de 250 €",
        description: "1-2 heures, 20+ photos retouchées, choix de lieu",
      },
      {
        name: "Séance Famille",
        price: "À partir de 300 €",
        description:
          "1-2 heures, intérieur ou extérieur, photos de groupe et individuelles",
      },
    ],
    contact: {
      email: "alexandre@moreau-photo.fr",
      phone: "+33 6 12 34 56 78",
      instagram: "@alexandre.moreau.photo",
      website: "www.alexandre-moreau-photo.fr",
    },
    availability: {
      available: ["Juin 2023", "Septembre 2023", "Octobre 2023"],
      partiallyAvailable: ["Juillet 2023", "Novembre 2023"],
      unavailable: ["Août 2023", "Décembre 2023"],
    },
  };

  // Données des réalisations
  const featuredProjects = [
    {
      id: 1,
      title: "Mariage de Claire & Thomas",
      date: "Mai 2023",
      location: "Château de Bagnols, Beaujolais",
      description:
        "Un mariage élégant dans un château historique du Beaujolais. La journée a commencé par les préparatifs dans les suites du château, suivie d'une cérémonie laïque dans les jardins et d'une réception dans la cour intérieure. L'ambiance chaleureuse et les détails raffinés ont créé une atmosphère magique.",
      tags: ["Mariage", "Château", "Élégant", "Extérieur"],
      coverImage: "/placeholder.svg?height=500&width=800",
      images: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
    },
    {
      id: 2,
      title: "Séance Couple - Emma & Lucas",
      date: "Avril 2023",
      location: "Vieux Lyon & Parc de la Tête d'Or",
      description:
        "Une séance d'engagement dans les ruelles pittoresques du Vieux Lyon et les jardins du Parc de la Tête d'Or. Nous avons capturé leur complicité à travers des moments spontanés et des portraits plus posés, profitant de la lumière dorée de fin d'après-midi.",
      tags: ["Couple", "Engagement", "Urbain", "Nature"],
      coverImage: "/placeholder.svg?height=500&width=800",
      images: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
    },
    {
      id: 3,
      title: "Mariage de Marie & Antoine",
      date: "Septembre 2022",
      location: "Domaine des Célestins, Provence",
      description:
        "Un mariage champêtre en Provence, baigné de soleil et entouré d'oliviers. La décoration aux tons pastel et les détails rustiques ont créé une ambiance décontractée et élégante. La journée s'est terminée par une soirée dansante sous les guirlandes lumineuses.",
      tags: ["Mariage", "Champêtre", "Provence", "Été"],
      coverImage: "/placeholder.svg?height=500&width=800",
      images: [
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
        "/placeholder.svg?height=800&width=1200",
      ],
    },
  ];

  // Données du portfolio
  const portfolioImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Couple de mariés au coucher du soleil",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Préparatifs de la mariée",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Cérémonie en extérieur",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800",
      category: "portrait",
      alt: "Portrait en lumière naturelle",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      category: "portrait",
      alt: "Portrait en studio",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800",
      category: "couple",
      alt: "Séance couple en forêt",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      category: "couple",
      alt: "Séance couple urbaine",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Détails de décoration de mariage",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800",
      category: "family",
      alt: "Séance famille en extérieur",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Premier regard des mariés",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=800",
      category: "portrait",
      alt: "Portrait en noir et blanc",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=800",
      category: "wedding",
      alt: "Soirée de mariage",
    },
  ];

  // Données des avis clients
  const reviews = [
    {
      id: 1,
      name: "Claire & Thomas",
      date: "Il y a 1 mois",
      rating: 5,
      text: "Alexandre a été exceptionnel pour notre mariage ! Il a su capturer tous les moments importants avec discrétion et professionnalisme. Les photos sont magnifiques et reflètent parfaitement l'ambiance de notre journée. Sa créativité et son œil pour les détails ont fait toute la différence. Nous recommandons Alexandre sans hésitation !",
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Mariage au Château de Bagnols",
    },
    {
      id: 2,
      name: "Emma & Lucas",
      date: "Il y a 2 mois",
      rating: 5,
      text: "Notre séance d'engagement avec Alexandre a été une expérience incroyable ! Il nous a mis à l'aise dès le début et nous a guidés tout au long de la séance. Les photos sont naturelles, pleines d'émotion et dépassent toutes nos attentes. Un vrai talent pour capturer les moments authentiques.",
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Séance couple à Lyon",
    },
    {
      id: 3,
      name: "Famille Dupont",
      date: "Il y a 3 mois",
      rating: 4,
      text: "Alexandre a réalisé une séance photo pour notre famille et le résultat est superbe. Il a su gérer nos deux enfants en bas âge avec patience et a capturé des moments précieux. Seul petit bémol, nous aurions aimé recevoir les photos un peu plus rapidement, mais la qualité valait l'attente !",
      avatar: "/placeholder.svg?height=100&width=100",
      project: "Séance famille au Parc de la Tête d'Or",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo de profil */}
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Photo de profil d'Alexandre Moreau"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informations principales */}
            <div className="flex-grow text-center md:text-left">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      Photographe Vérifié
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Top Rated
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-800">
                    {photographer.name}
                  </h1>
                  <h2 className="text-xl text-gray-600 mt-1">
                    {photographer.title}
                  </h2>

                  {/* Localisation */}
                  <div className="flex items-center mt-2 text-gray-600 justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-1" />
                    <span>{photographer.location}</span>
                  </div>

                  <div className="flex items-center mt-3 justify-center md:justify-start">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-700">
                      <span className="font-semibold">
                        {photographer.rating}
                      </span>{" "}
                      ({photographer.reviewCount} avis)
                    </span>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="flex mt-4 space-x-3 justify-center md:justify-start">
                    <a
                      href={`https://www.instagram.com/${photographer.contact.instagram.substring(
                        1
                      )}`}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://${photographer.contact.website}`}
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contacter
                  </button>
                  <button className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-full transition-colors flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Réserver une séance
                  </button>
                  <div className="flex justify-center gap-2 mt-1">
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                      <Heart className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                      <Share2 className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white shadow-sm border-b border-gray-200 py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Tarif journalier
              </p>
              <p className="text-2xl font-bold text-teal-600">
                {photographer.dailyRate} €
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Expérience
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {photographer.experience}
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Projets réalisés
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {photographer.projectsCount}
              </p>
            </div>
            <div className="text-center p-3">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Temps de réponse
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {photographer.responseTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* À propos */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                À propos
              </h3>
              <div className="text-gray-700 whitespace-pre-line">
                {photographer.bio}
              </div>
            </div>

            {/* Spécialités */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Spécialités
              </h3>
              <div className="flex flex-wrap gap-2">
                {photographer.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Équipement */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Équipement
              </h3>
              <ul className="space-y-2">
                {photographer.equipment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services et tarifs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Services et tarifs
              </h3>
              <div className="space-y-4">
                {photographer.services.map((service, index) => (
                  <div
                    key={index}
                    className={`pb-4 ${
                      index < photographer.services.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-gray-800">
                        {service.name}
                      </h4>
                      <span className="text-teal-600 font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-md transition-colors">
                Demander un devis personnalisé
              </button>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${photographer.contact.email}`}
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-gray-500" />
                  {photographer.contact.email}
                </a>
                <a
                  href={`tel:${photographer.contact.phone}`}
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-gray-500" />
                  {photographer.contact.phone}
                </a>
                <a
                  href={`https://www.instagram.com/${photographer.contact.instagram.substring(
                    1
                  )}`}
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-3 text-gray-500" />
                  {photographer.contact.instagram}
                </a>
                <a
                  href={`https://${photographer.contact.website}`}
                  className="flex items-center text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-3 text-gray-500" />
                  {photographer.contact.website}
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Disponibilité
              </h3>
              {photographer.availability.available.map((month, index) => (
                <div
                  key={`available-${index}`}
                  className="flex items-center mb-4"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Disponible en {month}</span>
                </div>
              ))}
              {photographer.availability.partiallyAvailable.map(
                (month, index) => (
                  <div
                    key={`partial-${index}`}
                    className="flex items-center mb-4"
                  >
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">
                      Partiellement disponible en {month}
                    </span>
                  </div>
                )
              )}
              {photographer.availability.unavailable.map((month, index) => (
                <div
                  key={`unavailable-${index}`}
                  className="flex items-center mb-4"
                >
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Indisponible en {month}</span>
                </div>
              ))}
              <button className="w-full mt-2 bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-md transition-colors">
                Vérifier une date spécifique
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Réalisations récentes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Réalisations récentes
              </h3>

              <div className="space-y-10">
                {featuredProjects.map((project, projectIndex) => (
                  <div
                    key={project.id}
                    className="pb-10 last:pb-0 border-b last:border-b-0 border-gray-200"
                  >
                    <h4 className="text-xl font-medium text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-4">
                      {project.date} - {project.location}
                    </p>

                    {/* Image principale du projet */}
                    <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.coverImage || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:opacity-95 transition-opacity cursor-pointer"
                        onClick={() =>
                          openModal(project.coverImage, projectIndex * 4)
                        }
                      />
                    </div>

                    {/* Description du projet */}
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    {/* Tags du projet */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Galerie d'images du projet */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
                          onClick={() =>
                            openModal(image, projectIndex * 4 + imageIndex + 1)
                          }
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="hover:opacity-80 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Portfolio
                </h3>
                <button className="text-teal-600 hover:text-teal-800 font-medium text-sm flex items-center">
                  Voir tout le portfolio
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {portfolioImages.map((image, index) => (
                  <div key={image.id} className="group relative aspect-square">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                      onClick={() => openModal(image.src, index)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                        <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                          <button className="bg-white rounded-full p-2 mx-1">
                            <Search className="h-5 w-5 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avis clients */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Avis clients
                </h3>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {photographer.rating}
                  </span>
                  <span className="text-gray-500 ml-1">
                    ({photographer.reviewCount})
                  </span>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`pb-6 ${
                      index < reviews.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">
                            {review.name}
                          </h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex mt-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mb-2">
                          {review.project}
                        </p>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-md transition-colors">
                Voir tous les avis ({photographer.reviewCount})
              </button>
            </div>

            {/* Call to Action */}
            <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Vous aimez mon travail ?
                  </h3>
                  <p className="text-gray-700">
                    Contactez-moi pour discuter de votre projet ou réserver une
                    séance photo.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contacter
                  </button>
                  <button className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Vérifier disponibilités
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl mx-auto p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10"
              onClick={closeModal}
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div className="relative max-h-[80vh] flex items-center justify-center">
                <Image
                  src={currentImage || "/placeholder.svg"}
                  alt="Image agrandie"
                  width={1200}
                  height={800}
                  objectFit="contain"
                  className="max-h-[80vh] w-auto"
                />
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <button
                  className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <button
                  className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center">
                <Download className="h-5 w-5 mr-2" />
                <span>Télécharger</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
