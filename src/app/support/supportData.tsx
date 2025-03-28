import React from "react";
import { FileText, Clock, AlertCircle, HelpCircle } from "lucide-react";

import type {
  SupportCategory,
  SupportTicket,
  SupportArticle,
} from "./supportTypes";

export const supportCategories: SupportCategory[] = [
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

export const recentTickets: SupportTicket[] = [
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

export const popularArticles: SupportArticle[] = [
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
