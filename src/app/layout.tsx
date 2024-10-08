import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@components/NavBar";


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
          <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <main style={{ flexGrow: 1 }}>
            {children}
            </main>
          </div>
          <NavBar/>
      </body>
    </html>
  );
}

