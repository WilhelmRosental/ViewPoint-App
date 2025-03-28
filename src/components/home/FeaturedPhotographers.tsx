import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function FeaturedPhotographers() {
  return (
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
          {/* ...Photographer Card 1... */}
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
                <span className="text-teal-700 font-semibold">250 €/jour</span>
                <Link
                  href="/photographers/sophie-dubois"
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Voir profil
                </Link>
              </div>
            </div>
          </div>
          {/* ...Photographer Card 2... */}
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
              <p className="mt-4 text-gray-600">Photographe mariage & couple</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-teal-700 font-semibold">300 €/jour</span>
                <Link
                  href="/photographers/thomas-martin"
                  className="text-teal-600 hover:text-teal-800 font-medium"
                >
                  Voir profil
                </Link>
              </div>
            </div>
          </div>
          {/* ...Photographer Card 3... */}
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
                <span className="text-teal-700 font-semibold">280 €/jour</span>
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
  );
}
