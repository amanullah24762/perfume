import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sauvage-atelier.example"),
  title: { default: "Sauvage Atelier — Modern Perfumery", template: "%s | Sauvage Atelier" },
  description: "A fictional independent perfume atelier creating expressive modern fragrances.",
  openGraph: { title: "Sauvage Atelier", description: "Modern perfumery, composed with feeling.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
