import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de ceux qui ont trouvé leur photographe
            idéal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          // ...existing code for Card 1...
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Marie Dupont</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "J'ai trouvé le photographe parfait pour mon mariage en moins de
              48h. Les photos sont magnifiques et le service était impeccable !"
            </p>
          </div>
          // ...existing code for Card 2...
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Pierre Lambert</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "En tant que startup, nous avions besoin de photos
              professionnelles pour notre site web. PixelPro nous a permis de
              trouver un photographe qui a parfaitement compris notre vision."
            </p>
          </div>
          // ...existing code for Card 3...
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Julie Moreau</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "La qualité des photographes sur cette plateforme est
              exceptionnelle. J'ai pu comparer plusieurs profils et choisir
              celui qui correspondait exactement à mes attentes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
