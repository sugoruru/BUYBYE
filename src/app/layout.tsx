import type { Metadata } from "next";
import Header from "../components/header";
import "./globals.css";
import Menu from "@/components/menu";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "BUYBYE Demo Page",
  description: "BUYBYE Demo Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/BUYBYE.png" />
      </head>
      <body className="h-full scroller">
        <Header />
        <NextTopLoader />
        <Suspense>
          <div className="min-h-[100lvh] py-[10lvh]">{children}</div>
        </Suspense>
        <Menu />
      </body>
    </html>
  );
}
