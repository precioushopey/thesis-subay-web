import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "SUBAY",
  description: "An Undergraduate Thesis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} antialiased`}>
        <div className="flex flex-row">
          <Sidebar />
          <div className="w-full flex flex-col">
            <Topbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
