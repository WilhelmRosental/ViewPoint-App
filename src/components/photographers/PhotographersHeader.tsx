import React from "react";

export default function PhotographersHeader() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Trouvez le photographe idéal pour votre projet
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Des photographes professionnels vérifiés, spécialisés dans tous
            types de projets
          </p>
        </div>
      </div>
    </section>
  );
}
