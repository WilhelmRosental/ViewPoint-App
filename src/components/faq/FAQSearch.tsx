import { Search } from "lucide-react";

interface FAQSearchProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const FAQSearch: React.FC<FAQSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Comment pouvons-nous vous aider ?
      </h1>
      <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
        Trouvez rapidement des réponses à vos questions sur notre plateforme de
        photographie
      </p>
      <div className="max-w-xl mx-auto relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-4 pl-12 rounded-full border-none shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSearch;
