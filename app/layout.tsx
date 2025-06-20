import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haven Homes",
  description: "Haven Homes v2.0",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${space.className} bar scroll-smooth bg-bg`}>
        {children}
      </body>
    </html>
  );
}
