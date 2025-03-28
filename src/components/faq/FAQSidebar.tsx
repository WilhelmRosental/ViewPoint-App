interface FAQCategory {
  id: string;
  name: string;
  description: string;
}

interface FAQSidebarProps {
  faqCategories: FAQCategory[];
  activeCategory: string;
  handleCategoryChange: (id: string) => void;
}

const FAQSidebar: React.FC<FAQSidebarProps> = ({
  faqCategories,
  activeCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Catégories</h2>
      <ul className="space-y-2">
        {faqCategories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleCategoryChange("all")}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
              activeCategory === "all"
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Toutes les questions
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FAQSidebar;
