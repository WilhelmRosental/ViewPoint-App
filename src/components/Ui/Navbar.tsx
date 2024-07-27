"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@radix-ui/themes";
import { useTheme } from "@/contexts/ThemeProvider";

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  className?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Card
      className={`${
        isMenuOpen ? "h-screen" : "h-12"
      } fixed top-0 w-full z-50 px-4 md:px-8 lg:px-16`}
    >
      <div className="flex justify-between items-center h-16 max-w-6xl mx-auto">
        <div className="flex flex-row items-center grow">
          <Link className="font-bold text-xl" href="/">
            {/* <Image
              src="/images/logo.png"
              width={36}
              height={36}
              alt="Logo ViewPoint"
            /> */}
          </Link>
          <Button variant="soft" onClick={toggleDarkMode}>
            Theme
          </Button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Icône pour le menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile distinct */}
      <div
        className={`${
          isMenuOpen ? "absolute" : "hidden"
        } inset-0 bg-black-/20 bg-opacity-75 md:hidden flex flex-col items-center z-50 h-full w-full`}
      >
        {/* {navLinks.map((link) => (
          <Link
            className="block px-4 py-2 md:py-0 md:mx-2 text-gray-300 hover:text-white font-bold"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))} */}
      </div>
    </Card>
  );
};

export default Navbar;
