import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  ChevronRight,
  Search,
  Star,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Trouvez le photographe parfait pour capturer vos moments
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connectez-vous avec des photographes professionnels talentueux
              pour tous vos projets et événements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/photographers"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
              >
                Trouver un photographe
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
              >
                Devenir photographe
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-12">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Quel type de photographe recherchez-vous ?"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
              </div>
              <div className="relative">
                <select className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
                  <option>Toutes les villes</option>
                  <option>Paris</option>
                  <option>Lyon</option>
                  <option>Marseille</option>
                  <option>Bordeaux</option>
                  <option>Lille</option>
                </select>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir ViewPoint ?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme connecte les clients avec les meilleurs
              photographes professionnels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Photographes vérifiés
              </h3>
              <p className="text-gray-600">
                Tous nos photographes sont soigneusement sélectionnés et
                vérifiés pour garantir un service de qualité.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Garantie satisfaction
              </h3>
              <p className="text-gray-600">
                Nous garantissons votre satisfaction ou nous vous remboursons
                intégralement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Projets sur mesure
              </h3>
              <p className="text-gray-600">
                Trouvez le photographe parfait pour votre projet spécifique,
                quel que soit votre budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photographers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Photographes en vedette
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Découvrez nos talents les mieux notés
              </p>
            </div>
            <Link
              href="/photographers"
              className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
            >
              Voir tous les photographes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photographer Card 1 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 w-full relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portfolio example"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Sophie Dubois"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Sophie Dubois
                    </h3>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-700 font-medium">4.9</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Photographe portrait & événements
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-teal-700 font-semibold">
                    250 €/jour
                  </span>
                  <Link
                    href="/photographers/sophie-dubois"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Voir profil
                  </Link>
                </div>
              </div>
            </div>

            {/* Photographer Card 2 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 w-full relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portfolio example"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Thomas Martin"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Thomas Martin
                    </h3>
                    <p className="text-gray-600">Lyon, France</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-700 font-medium">4.8</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Photographe mariage & couple
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-teal-700 font-semibold">
                    300 €/jour
                  </span>
                  <Link
                    href="/photographers/thomas-martin"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Voir profil
                  </Link>
                </div>
              </div>
            </div>

            {/* Photographer Card 3 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 w-full relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portfolio example"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Camille Leroy"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Camille Leroy
                    </h3>
                    <p className="text-gray-600">Bordeaux, France</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-gray-700 font-medium">4.7</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">Photographe mode & produit</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-teal-700 font-semibold">
                    280 €/jour
                  </span>
                  <Link
                    href="/photographers/camille-leroy"
                    className="text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Voir profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comment ça marche
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez et réservez un photographe professionnel en quelques
              étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Publiez votre projet
              </h3>
              <p className="text-gray-600">
                Décrivez votre projet et vos besoins spécifiques en
                photographie.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Recevez des offres
              </h3>
              <p className="text-gray-600">
                Les photographes intéressés vous envoient leurs propositions et
                devis.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Choisissez un photographe
              </h3>
              <p className="text-gray-600">
                Comparez les profils, portfolios et tarifs pour faire votre
                choix.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Profitez du résultat
              </h3>
              <p className="text-gray-600">
                Recevez vos photos et donnez votre avis sur la prestation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences de ceux qui ont trouvé leur photographe
              idéal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
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
                "J'ai trouvé le photographe parfait pour mon mariage en moins de
                48h. Les photos sont magnifiques et le service était impeccable
                !"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Pierre Lambert</h4>
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
                "En tant que startup, nous avions besoin de photos
                professionnelles pour notre site web. PixelPro nous a permis de
                trouver un photographe qui a parfaitement compris notre vision."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Client"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Julie Moreau</h4>
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
                "La qualité des photographes sur cette plateforme est
                exceptionnelle. J'ai pu comparer plusieurs profils et choisir
                celui qui correspondait exactement à mes attentes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Prêt à capturer vos moments importants ?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Rejoignez des milliers de clients satisfaits et trouvez le
            photographe idéal pour votre projet dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/post-project"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
            >
              Publier un projet
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/photographers"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
            >
              Explorer les photographes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
