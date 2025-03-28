export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comment ça marche
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez et réservez un photographe professionnel en quelques étapes
            simples
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
              Décrivez votre projet et vos besoins spécifiques en photographie.
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
              Comparez les profils, portfolios et tarifs pour faire votre choix.
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
  );
}
