"use client";
import { SessionProvider } from "next-auth/react";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
