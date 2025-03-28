import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white">
      {/* ...existing background code... */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Trouvez le photographe parfait pour capturer vos moments
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Connectez-vous avec des photographes professionnels talentueux pour
            tous vos projets et événements.
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
  );
}
