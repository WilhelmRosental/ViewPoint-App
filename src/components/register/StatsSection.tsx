const StatsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-teal-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
            <p className="text-gray-700">
              Clients actifs à la recherche de photographes
            </p>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">€2M+</div>
            <p className="text-gray-700">
              Versés aux photographes l&apos;année dernière
            </p>
          </div>
          <div className="bg-teal-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">0%</div>
            <p className="text-gray-700">
              Frais d&apos;inscription pour les photographes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
