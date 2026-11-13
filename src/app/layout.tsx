import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { SearchProvider } from "@/lib/searchContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/gallery/SearchDialog";
import "./globals.css";

//Configurações de fontes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Antotipia — Um tributo a Elas",
    template: "%s — DARK ARCHIVE",
  },
  description:
    "Um site criados pelo grupo de Desenvolvimento Científico do Sesi/Senai SIG para apresentar um projeto relacionado a antotipia.",
  openGraph: {
    type: "website",
    siteName: "Antotipia",
    title: "Antotipia — Um tributo a Elas",
    description:
      "Um site criados pelo grupo de Desenvolvimento Científico do Sesi/Senai SIG para apresentar um projeto relacionado a antotipia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${playfair.variable}`}
    >
      <body className="bg-da-bg text-da-text font-sans antialiased">
        <SearchProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <SearchDialog />
        </SearchProvider>
      </body>
    </html>
  );
}
