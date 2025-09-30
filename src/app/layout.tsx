import type { Metadata } from "next";
import { Montserrat, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psicólogos no Nordeste",
  description: "Descrição do App",
  applicationName: "Nome do App",
  authors: [{ url: "https://seedabit.org.br", name: "Seed a Bit" }],
  keywords: ["palavra-chave", "palavra-chave"],
  creator: "Seed a Bit",
  publisher: "Seed a Bit",
  abstract: "Descrição do App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang='pt-BR'>
            <head>
                <link rel="preload" href="/images/seed-a-mascot.svg" as="image" />
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body
                className={`${montserrat.variable} ${unbounded.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
