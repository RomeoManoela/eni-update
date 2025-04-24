import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/ui/Header";

export const metadata: Metadata = {
  title: "ENI",
  description: "eni mg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#001100] text-white bg-cover bg-center">
      <Header />
      <main>
          {children}
      </main>
      </body>
    </html>
  );
}
