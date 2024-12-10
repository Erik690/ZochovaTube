// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "@mui/material/styles";

export const metadata: Metadata = {
  title: "ZochovaTube",
  description: "Created by EK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <main>
              {children}
            </main>
          <Navbar /> 
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}