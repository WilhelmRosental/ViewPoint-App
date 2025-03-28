"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ClientsSection() {
  return (
    <div id="for-clients" className="mb-20 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Pour les clients
      </h2>
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          {/* ...existing code pour la première étape... */}
          <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-teal-600 font-bold text-xl">1</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Publiez votre projet
          </h3>
          <p className="text-gray-600 mb-4">
            Décrivez votre projet en détail : type de photographie, lieu, date,
            budget et exigences spécifiques. Plus votre description est précise,
            plus vous attirerez des photographes qualifiés.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">Formulaire simple et guidé</span>
            </li>
            // ...existing list items...
          </ul>
          <div className="mt-6">
            <Link
              href="/post-project"
              className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
            >
              Publier un projet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Publication de projet"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      // ...existing code pour les étapes 2 à 4...
    </div>
  );
}
