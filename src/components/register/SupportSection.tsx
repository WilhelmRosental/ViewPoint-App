import React from "react";
import { HelpCircle, MessageSquare } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4">
          <HelpCircle className="h-8 w-8 text-teal-600" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Des questions ?
        </h2>
        <p className="text-gray-600 mb-4 max-w-xl mx-auto">
          Notre équipe est disponible pour vous aider dans votre inscription et
          répondre à toutes vos questions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:photographes@pixelpro.fr"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <MessageSquare className="h-5 w-5 mr-2 text-gray-400" />
            photographes@viewpoint.fr
          </a>
          <a
            href="tel:+33123456789"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            01 23 45 67 89
          </a>
        </div>
      </div>
    </section>
  );
}
