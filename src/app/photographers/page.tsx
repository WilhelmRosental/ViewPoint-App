"use client";

import Link from "next/link";
import PhotographerCard from "@/components/PhotographerCard";
import { usePhotographers } from "@/hooks/usePhotographers";
import { ArrowRight } from "lucide-react";
import PhotographersHeader from "@/components/photographers/PhotographersHeader";
import Pagination from "@/components/photographers/Pagination";
import CallToAction from "@/components/photographers/CallToAction";

export default function Photographers() {
  const { photographers, loading, error } = usePhotographers();

  if (loading) {
    return <div className="text-center my-20">Loading photographers...</div>;
  }

  if (error) {
    return <div className="text-center my-20 text-red-500">{error}</div>;
  }

  return (
    <>
      {/* Header */}
      <PhotographersHeader />

      {/* Photographers grid */}
      <div
        id="main"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20"
      >
        {photographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />

      {/* CTA */}
      <CallToAction />
    </>
  );
}
