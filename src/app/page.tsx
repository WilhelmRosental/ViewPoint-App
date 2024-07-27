"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PhotographerCard from "@/components/PhotographerCard";

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

export default function Home() {
  const [photographers, setPhotographers] = useState<Photographer[]>([]);

  useEffect(() => {
    fetch("/api/photographers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPhotographers(data))
      .catch((error) => console.error("Error fetching photographers:", error));
  }, []);

  return (
    <div>
      <header className="main-header flex flex-row justify-between items-center h-32">
        <Link href="/" aria-current="page" aria-label="Navigation to homepage">
          <Image
            src="/logo.svg"
            alt="Fisheye Home page"
            width={96}
            height={96}
          />
        </Link>
        <h1 className="text-red-700 text-center">Nos photographes</h1>
      </header>

      <main
        id="main"
        className="photographer_section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-20"
      >
        {photographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </main>
    </div>
  );
}
