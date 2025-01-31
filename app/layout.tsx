import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import Container from "@/components/Container";
import Navbar from "@/app/Navbar";
import {Toaster} from "@/components/ui/sonner";
import me from "@/change_data/hero_section.json";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: `${me.my_name} 🌟 Portfolio - DragonDevs`,
  description: "Experienced web apps developer and designer specializing in building fast, scalable, and innovative solutions for the modern web. 🚀🌟 - dragondevs",
};


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48"/>
      <link rel="apple-touch-icon" href="/apple-icon.png"/>
    </head>
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar/>
        <main className="flex-grow sm:p-10 p-5  bg-gradient-to-r from-primary/25">
          <Container>{children}</Container>
        </main>
        <Toaster position="top-center"/>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
