import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duuk van den Bosch | CV",
  description: "CV website for Duuk van den Bosch - HBO-ICT Student & Software Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
