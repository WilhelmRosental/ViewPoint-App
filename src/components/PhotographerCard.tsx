import { useEffect, useState } from "react";
import Image from "next/image";

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

const PhotographerCard = ({ photographer }: { photographer: Photographer }) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    fetch(`/api/images/${photographer.portrait}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }, [photographer.portrait]);

  return (
    <div className="user-card flex flex-col items-center p-4 border rounded-lg shadow-md">
      <header className="user-card__header">
        <a
          href={`/photographer/${photographer.id}`}
          className="user-card__link"
          role="navigation"
          aria-label={`Lien vers la page de ${photographer.name}`}
        >
          <Image
            className="user-card__picture rounded-full"
            src={require("@/app/data/photographers/" + photographer.portrait)}
            alt={`Photo de ${photographer.name}`}
            width={200}
            height={200}
          />
          <h2 className="user-card__name text-red-600 text-2xl mt-4">
            {photographer.name}
          </h2>
        </a>
      </header>
      <section className="user-card__paragraph text-center mt-4">
        <p className="user-card__localization text-gray-600">
          {photographer.city}, {photographer.country}
        </p>
        <p className="user-card__tagline">{photographer.tagline}</p>
        <p className="user-card__price text-gray-500">
          {photographer.price}€/jour
        </p>
      </section>
    </div>
  );
};

export default PhotographerCard;
