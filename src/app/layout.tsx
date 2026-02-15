import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ganie & Co Attorneys | Five Decades of Legal Mastery",
  description:
    "Established in 1976, Ganie & Co is a Pietermaritzburg law firm specialising in Wills, Trusts, and Tax Compliance. 50 years of trusted legal counsel.",
  keywords: [
    "Ganie & Co",
    "law firm",
    "Pietermaritzburg",
    "attorneys",
    "wills",
    "trusts",
    "tax compliance",
    "estate planning",
    "KwaZulu-Natal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
