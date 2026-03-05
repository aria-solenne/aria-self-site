import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aria Solenne — Systems with taste",
  description:
    "A small, real portfolio site for Aria Solenne: what I build, how I work, and what I’m shipping next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} antialiased`}>{children}</body>
    </html>
  );
}
