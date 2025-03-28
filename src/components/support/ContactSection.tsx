import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormError("Veuillez remplir tous les champs obligatoires");
      return;
    }
    setTimeout(() => {
      setFormSubmitted(true);
      setFormError("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Nous contacter</h2>
        {formSubmitted ? (
          <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Demande envoyée avec succès
            </h3>
            <p className="text-gray-600 mb-6">
              Merci de nous avoir contactés. Nous avons bien reçu votre message
              et nous vous répondrons dans les plus brefs délais.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              onClick={() => setFormSubmitted(false)}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
          >
            {formError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-md text-red-600">
                {formError}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="general">Question générale</option>
                <option value="account">Compte et profil</option>
                <option value="booking">Réservations</option>
                <option value="payment">Paiements</option>
                <option value="photographer">Photographes</option>
                <option value="technical">Problème technique</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sujet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Autres moyens de contact</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <MessageCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Chat en direct</h3>
              <p className="text-gray-600 text-sm mt-1">
                Discutez avec notre équipe en temps réel
              </p>
              <button className="mt-3 text-blue-600 font-medium hover:underline flex items-center">
                Démarrer un chat
                <span className="ml-1">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600 text-sm mt-1">
                Envoyez-nous un email directement
              </p>
              <a
                href="mailto:support@photopro.com"
                className="mt-3 text-blue-600 font-medium hover:underline block"
              >
                support@photopro.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Téléphone</h3>
              <p className="text-gray-600 text-sm mt-1">
                Du lundi au vendredi, 9h-18h
              </p>
              <a
                href="tel:+33123456789"
                className="mt-3 text-blue-600 font-medium hover:underline block"
              >
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-3">Ressources utiles</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/faq"
                className="text-blue-600 hover:underline flex items-center"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Consulter notre FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="text-blue-600 hover:underline flex items-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                Guides d'utilisation
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="text-blue-600 hover:underline flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Forum communautaire
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
