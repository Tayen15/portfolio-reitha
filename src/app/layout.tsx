import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
     title: "Reitha Alvida | Portfolio",
     description: "Personal portfolio showcasing my projects, education and experience",
     openGraph: {
          title: "Reitha Alvida | Portfolio",
          description: "Personal portfolio showcasing my projects, education and experience",
          url: "",
          siteName: "Reitha Alvida | Portfolio",
          images: [
               {
                    url: "",
                    width: 1200,
                    height: 630,
                    alt: "Reitha Alvida Portfolio Open Graph Image",
               },
          ],
          locale: "en_US",
          type: "website",
     },
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
