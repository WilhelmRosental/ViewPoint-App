"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  HelpCircle,
  FileText,
  MessageCircle,
} from "lucide-react";

interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SupportArticle {
  id: string;
  title: string;
  category: string;
  views: number;
}

interface HelpCenterProps {
  supportCategories: SupportCategory[];
  popularArticles: SupportArticle[];
  router: any;
}

const HelpCenter = ({
  supportCategories,
  popularArticles,
  router,
}: HelpCenterProps) => {
  return (
    <div>
      {/* Categories */}
      <h2 className="text-2xl font-bold mb-6">
        Comment pouvons-nous vous aider ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {supportCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md cursor-pointer"
            onClick={() => router.push(`/faq?category=${category.id}`)}
          >
            <div
              className={`${category.color} p-3 rounded-full inline-flex mb-4`}
            >
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>Explorer</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Popular articles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Articles populaires</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-100">
          {popularArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => router.push(`/faq/article/${article.id}`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{article.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Catégorie: {article.category} • {article.views} vues
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/faq"
            className="text-blue-600 font-medium hover:underline"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>

      {/* Quick links */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Liens rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/faq"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
            <span>FAQ</span>
          </Link>
          <Link
            href="/support/contact"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
            <span>Chat en direct</span>
          </Link>
          <Link
            href="/support/tickets"
            className="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <FileText className="h-5 w-5 text-blue-600 mr-3" />
            <span>Mes tickets</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
