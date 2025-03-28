"use client";
import React from "react";

interface TabNavigationProps {
  activeTab: "clients" | "photographers";
  setActiveTab: (tab: "clients" | "photographers") => void;
}

export default function TabNavigation({
  activeTab,
  setActiveTab,
}: TabNavigationProps) {
  return (
    <div className="mb-16">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("clients")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base ${
              activeTab === "clients"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pour les clients
          </button>
          <button
            onClick={() => setActiveTab("photographers")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base ${
              activeTab === "photographers"
                ? "border-teal-500 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pour les photographes
          </button>
        </nav>
      </div>
    </div>
  );
}
