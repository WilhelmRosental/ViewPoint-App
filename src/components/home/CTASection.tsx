import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
          Prêt à capturer vos moments importants ?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Rejoignez des milliers de clients satisfaits et trouvez le photographe
          idéal pour votre projet dès aujourd'hui.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/post-project"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
          >
            Publier un projet
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/photographers"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white"
          >
            Explorer les photographes
          </Link>
        </div>
      </div>
    </section>
  );
}
