import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/src/components/NavBar";
import { Toaster } from "react-hot-toast";
import { ThemProvider } from "@/src/components/Themes/ThemProvider";
import { Header } from "@/src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <Header />
            <div className="mt-28">{children}</div>
          </div>
          <Toaster />
          {modal}
        </ThemProvider>
      </body>
    </html>
  );
}
