import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="max-w-7xl mx-auto my-12 bg-teal-50 rounded-lg p-6 border border-teal-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Vous êtes photographe ?
          </h3>
          <p className="text-gray-600 mt-1">
            Rejoignez notre communauté de photographes professionnels et trouvez
            de nouveaux clients.
          </p>
        </div>
        <Link
          href="/register"
          className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 whitespace-nowrap"
        >
          Devenir photographe
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
