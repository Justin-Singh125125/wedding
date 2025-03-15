import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";

export const metadata: Metadata = {
  title: "J&J's Wedding",
  description: "Justin and Jenna's wedding website. Built by Justin Singh",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-p-10 scroll-smooth`}
      style={{
        fontFamily: '"Playfair Display", serif',
      }}
    >
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
