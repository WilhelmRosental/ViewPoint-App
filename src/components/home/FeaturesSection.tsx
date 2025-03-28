import { Users, CheckCircle, Camera } from "lucide-react";

export default function FeaturesSection() {
  return (
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
              Tous nos photographes sont soigneusement sélectionnés et vérifiés
              pour garantir un service de qualité.
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
              Trouvez le photographe parfait pour votre projet spécifique, quel
              que soit votre budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
