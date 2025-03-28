"use client";

// ...existing imports if needed...
import Link from "next/link";
import {
  HelpCircle,
  Mail,
  ChevronRight,
  FileText,
  Shield,
  Camera,
} from "lucide-react";

export default function HelpSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Centre d'aide</h2>
        <p className="text-gray-600 mb-6">
          Vous avez des questions ou besoin d'assistance ? Nous sommes là pour
          vous aider.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <HelpCircle className="h-8 w-8 text-teal-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">FAQ</h3>
            <p className="text-gray-600 mb-4">
              Trouvez des réponses aux questions fréquemment posées.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center text-teal-600 hover:text-teal-800"
            >
              Consulter la FAQ
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <Mail className="h-8 w-8 text-teal-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">
              Contacter le support
            </h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible pour répondre à vos questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-teal-600 hover:text-teal-800"
            >
              Contacter le support
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="font-medium text-gray-900 mb-4">Ressources utiles</h3>
          <div className="space-y-3">
            <Link
              href="/how-it-works"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <div className="mr-3 flex-shrink-0">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <span>Comment fonctionne PixelPro</span>
            </Link>
            <Link
              href="/terms"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <div className="mr-3 flex-shrink-0">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <span>Conditions générales d'utilisation</span>
            </Link>
            <Link
              href="/privacy-policy"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <div className="mr-3 flex-shrink-0">
                <Shield className="h-5 w-5 text-gray-400" />
              </div>
              <span>Politique de confidentialité</span>
            </Link>
            <Link
              href="/help/photographer-guide"
              className="flex items-center text-gray-600 hover:text-teal-600"
            >
              <div className="mr-3 flex-shrink-0">
                <Camera className="h-5 w-5 text-gray-400" />
              </div>
              <span>Guide du photographe</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
