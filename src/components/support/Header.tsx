"use client";
import React from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Centre d'assistance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          Besoin d'aide ? Nous sommes là pour vous accompagner et répondre à
          toutes vos questions.
        </p>
        {/* Search bar */}
        <div className="relative max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/70" />
          </div>
          <input
            type="text"
            placeholder="Rechercher dans notre base de connaissances..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
