import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
     title: "Reitha Alvida | Portfolio",
     description: "Personal portfolio showcasing my projects, education and experience",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body
                    className={`${inter} antialiased`}
               >
                    {children}
               </body>
          </html>
     );
}
