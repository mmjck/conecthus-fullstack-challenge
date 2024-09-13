import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, SideBarMenu } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "When Lock.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}  h-screen bg-grey01 h-screen`}>

        <div className="flex">
          <SideBarMenu ></SideBarMenu>

          <div className="w-full">
            <Header></Header>
            {children}
          </div>

        </div>
      </body >
    </html >
  );
}
