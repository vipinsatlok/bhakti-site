import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhakti Site",
  description: "Dis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex text-black bg-blue-950 justify-center min-w-full items-start min-h-screen">
        <div className="max-w-sm bg-white min-h-screen w-full px-4">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
