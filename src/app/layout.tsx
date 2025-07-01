import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Aurassi Hotel - Luxury Accommodations",
  description:
    "Spacious, modern rooms with panoramic views of the Mediterranean Sea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
