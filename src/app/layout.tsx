import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Synapse 2026 | Where Logic is Challenged",
  description: "Synapse - A high-engagement, case-driven competition where teams become AI Ethics & Product Investigators. Rescue a failed AI system while exploring product thinking, UX, AI, and ethics.",
  keywords: ["synapse", "AI ethics", "product thinking", "UX", "competition", "CSI SIESGST", "hackathon"],
  authors: [{ name: "CSI SIESGST" }],
  openGraph: {
    title: "Synapse 2026 | Where Logic is Challenged",
    description: "Become an AI Ethics & Product Investigator. Rescue a failed AI system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#030303] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
