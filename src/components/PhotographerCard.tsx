import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, Star, Tag } from "lucide-react";

type Photographer = {
  id: number;
  firstname: string;
  title: string;
  recommendations: number;
  city: string;
  tags: [string];
  price: number;
  portrait: string;
};

export default function PhotographerCard({
  photographer,
}: {
  photographer: Photographer;
}) {
  const [portraitSrc, setPortraitSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extraire juste le nom du fichier du portrait (sans chemin)
    const portraitFile = photographer.portrait.split("/").pop();

    // Importer dynamiquement l'image
    import(`@/assets/photographers/${portraitFile}`)
      .then((image) => {
        setPortraitSrc(image.default.src);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(
          `Failed to load portrait for ${photographer.firstname}:`,
          error
        );
        setIsLoading(false);
      });
  }, [photographer.portrait, photographer.firstname]);

  return (
    <Link
      href={`/photographer/${photographer.id}`}
      className="block h-full"
      aria-label={`Lien vers la page de ${photographer.firstname}`}
    >
      <div className="w-full max-w-sm overflow-hidden rounded-lg hover:shadow-lg border border-gray-200 bg-white shadow-sm">
        <div className="relative h-40 bg-gradient-to-r from-slate-700 to-slate-900">
          {portraitSrc && (
            <Image
              src={portraitSrc}
              alt="test"
              layout="fill"
              objectFit="cover"
            />
          )}
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{photographer.firstname}</h2>
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Localisé(e) à {photographer.city}</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between pb-2">
            <div className="text-lg font-bold text-teal-600">
              <Tag className="mr-1 h-4 w-4 inline" />
              <span>{photographer.price} €/jour</span>
            </div>
          </div>

          <h3 className="text-lg font-semibold pb-2">{photographer.title}</h3>

          <div className="flex items-center gap-1 mb-4">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium">
              {photographer.recommendations} recommandations
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {photographer.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
            <Camera className="h-5 w-5 text-teal-600" />
            <span className="text-sm text-gray-500">
              Portfolio disponible sur demande
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
