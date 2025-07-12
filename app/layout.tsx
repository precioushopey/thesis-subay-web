import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "SUBAY",
  description:
    "An Undergraduate Thesis by Dominguez, Jumuad, Nolasco, and Onahon",
  icons: {
    icon: "/light_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} antialiased`}>{children}</body>
    </html>
  );
}
