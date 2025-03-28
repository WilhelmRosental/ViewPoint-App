"use client";
import React from "react";

export default function HeaderSection() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Comment fonctionne PixelPro ?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Découvrez comment notre plateforme connecte les clients avec les
          meilleurs photographes professionnels pour tous types de projets
        </p>
      </div>
    </section>
  );
}
