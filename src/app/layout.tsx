import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const metadata: Metadata = {
  title: "Four Card Feature Section",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-[15px] antialiased`}>
        {children}
      </body>
    </html>
  );
}
