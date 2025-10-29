import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Invite 💍",
  description: "A beautiful digital wedding invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
