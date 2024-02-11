import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Layout from "./components/header";

const exo2 = Exo_2({ 
  subsets: ["latin"], 
  display: 'swap', 
  weight: ['400', '600', '700'], 
  variable: '--font-exo2' 
});

export const metadata: Metadata = {
  title: "MySecret",
  description: "perguntas e respostas anônimas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo2.variable}>
        <div className="flex flex-col items-center container mx-auto max-w-sm bg-white p-4">
          {/* <Layout /> */}
          { children }
        </div>
      </body>
    </html>
  );
}
