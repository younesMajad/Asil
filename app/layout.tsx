import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "./components/Navigations";
import "@/app/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "ASIL | Architecture in Motion",
  description:
    "AI-powered construction content and luxury real-estate marketing assets.",
    icons : {
      icon: "/logo.jpeg",
     }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} bg-obsidian antialiased selection:bg-stone selection:text-obsidian`}
    >
      <body>
        <Navigation />
        {children}
        
      </body>
    </html>
  );
}
