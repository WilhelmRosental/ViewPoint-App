interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  id: string;
  name: string;
  description: string;
}

interface FAQContentProps {
  filteredFAQs: FAQItem[];
  searchQuery: string;
  activeCategory: string;
  faqCategories: FAQCategory[];
  openQuestions: string[];
  toggleQuestion: (id: string) => void;
  handleReset: () => void;
}

const FAQContent: React.FC<FAQContentProps> = ({
  filteredFAQs,
  searchQuery,
  activeCategory,
  faqCategories,
  openQuestions,
  toggleQuestion,
  handleReset,
}) => {
  const title = searchQuery
    ? "Résultats de recherche"
    : activeCategory === "all"
    ? "Toutes les questions"
    : faqCategories.find((c) => c.id === activeCategory)?.name || "";
  const description = searchQuery
    ? `${filteredFAQs.length} résultat(s) pour "${searchQuery}"`
    : activeCategory === "all"
    ? "Toutes les questions fréquemment posées"
    : faqCategories.find((c) => c.id === activeCategory)?.description || "";

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {filteredFAQs.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Aucun résultat trouvé
          </h3>
          <p className="text-gray-600 mb-4">
            Nous n'avons pas trouvé de réponse correspondant à votre recherche.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Réinitialiser la recherche
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.question}
                  </h3>
                  <span
                    className={`transform transition-transform duration-200 ${
                      openQuestions.includes(item.id) ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </div>
              </button>
              {openQuestions.includes(item.id) && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Section contact */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Vous n'avez pas trouvé ce que vous cherchiez ?
        </h2>
        <p className="text-gray-600 mb-6">
          Notre équipe de support est disponible pour répondre à toutes vos
          questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Contacter le support
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Consulter le guide d'utilisation
          </a>
        </div>
      </div>
    </>
  );
};

export default FAQContent;
