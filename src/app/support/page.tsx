"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icons
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  HelpCircle,
  ChevronRight,
  Send,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

// Types
type SupportCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

type SupportTicket = {
  id: string;
  subject: string;
  status: "open" | "closed" | "pending";
  date: string;
  lastUpdate: string;
};

type SupportArticle = {
  id: string;
  title: string;
  category: string;
  views: number;
};

const SupportPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"help" | "tickets" | "contact">(
    "help"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Sample data
  const supportCategories: SupportCategory[] = [
    {
      id: "account",
      title: "Compte et profil",
      description: "Gestion de compte, paramètres et informations personnelles",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "booking",
      title: "Réservations",
      description: "Processus de réservation, modifications et annulations",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "payment",
      title: "Paiements",
      description: "Facturation, méthodes de paiement et remboursements",
      icon: <AlertCircle className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: "photographer",
      title: "Photographes",
      description: "Devenir photographe, commissions et portfolio",
      icon: <HelpCircle className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  const recentTickets: SupportTicket[] = [
    {
      id: "T-1234",
      subject: "Problème de paiement pour la réservation #5678",
      status: "open",
      date: "15 mars 2025",
      lastUpdate: "Il y a 2 heures",
    },
    {
      id: "T-1235",
      subject: "Comment modifier mon portfolio ?",
      status: "closed",
      date: "10 mars 2025",
      lastUpdate: "12 mars 2025",
    },
    {
      id: "T-1236",
      subject: "Demande de remboursement",
      status: "pending",
      date: "8 mars 2025",
      lastUpdate: "Il y a 1 jour",
    },
  ];

  const popularArticles: SupportArticle[] = [
    {
      id: "a1",
      title: "Comment modifier ma réservation ?",
      category: "Réservations",
      views: 1245,
    },
    {
      id: "a2",
      title: "Processus de vérification des photographes",
      category: "Photographes",
      views: 987,
    },
    {
      id: "a3",
      title: "Options de paiement disponibles",
      category: "Paiements",
      views: 876,
    },
    {
      id: "a4",
      title: "Politique d'annulation et remboursements",
      category: "Réservations",
      views: 754,
    },
  ];

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

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setFormError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      setFormError("");
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      });
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-600";
      case "closed":
        return "bg-gray-100 text-gray-600";
      case "pending":
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Ouvert";
      case "closed":
        return "Fermé";
      case "pending":
        return "En attente";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "help"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("help")}
          >
            Centre d'aide
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "tickets"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("tickets")}
          >
            Mes tickets
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm md:text-base ${
              activeTab === "contact"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Nous contacter
          </button>
        </div>

        {/* Help Center Tab */}
        {activeTab === "help" && (
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
                  <h3 className="text-lg font-semibold mb-2">
                    {category.title}
                  </h3>
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
                        <h3 className="font-medium text-gray-900">
                          {article.title}
                        </h3>
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
        )}

        {/* My Tickets Tab */}
        {activeTab === "tickets" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Mes tickets de support</h2>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => setActiveTab("contact")}
              >
                Nouveau ticket
              </button>
            </div>

            {recentTickets.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sujet
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Statut
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Dernière mise à jour
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentTickets.map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() =>
                            router.push(`/support/tickets/${ticket.id}`)
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {ticket.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ticket.subject}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                                ticket.status
                              )}`}
                            >
                              {getStatusText(ticket.status)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ticket.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ticket.lastUpdate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <ChevronRight className="h-5 w-5 text-gray-400 inline-block" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun ticket
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Vous n'avez pas encore créé de ticket de support. Créez-en un
                  pour obtenir de l'aide.
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => setActiveTab("contact")}
                >
                  Créer un ticket
                </button>
              </div>
            )}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
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
                    Merci de nous avoir contactés. Nous avons bien reçu votre
                    message et nous vous répondrons dans les plus brefs délais.
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
              <h2 className="text-2xl font-bold mb-6">
                Autres moyens de contact
              </h2>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Chat en direct
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Discutez avec notre équipe en temps réel
                    </p>
                    <button className="mt-3 text-blue-600 font-medium hover:underline flex items-center">
                      Démarrer un chat
                      <ChevronRight className="h-4 w-4 ml-1" />
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
                <h3 className="font-medium text-gray-900 mb-3">
                  Ressources utiles
                </h3>
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
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
