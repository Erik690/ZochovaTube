import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ZoškaTube",
  description: "Made by EK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
