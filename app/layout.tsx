import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aldo Hasa – Business Informatics Student & Account Manager",
  description: "Portfolio website showcasing Aldo Hasa's professional journey, achievements, and skills in business, technology, and client management.",
  keywords: ["Aldo Hasa", "Business Informatics", "Account Manager", "Portfolio", "Web Development", "Data Analysis"],
  authors: [{ name: "Aldo Hasa" }],
  openGraph: {
    title: "Aldo Hasa – Business Informatics Student & Account Manager",
    description: "Portfolio website showcasing Aldo Hasa's professional journey, achievements, and skills in business, technology, and client management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
