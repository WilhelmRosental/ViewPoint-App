import type { Metadata } from "next";
import Navbar from "@/components/Ui/Navbar";
import Footer from "@/components/Ui/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ViewPoint",
  description: "Artists Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
