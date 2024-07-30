import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/header/Header";
import WhatsappFixed from "@/components/whatsappFixed/whatsappFixed";
import AOSInitializer from "@/components/AOSInitializer/AOSInitializar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiggossTattoo",
  description: "DiggossTattoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <WhatsappFixed />
          <AOSInitializer /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
