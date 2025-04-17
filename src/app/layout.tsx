import "~/styles/globals.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";


export const metadata: Metadata = {
  title: "Roast Nomads",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Montserrat({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-[#F5F2EE]">
        {children}
      </body>
    </html>
  );
}
