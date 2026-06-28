import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: [
    {
      path: "../../public/fonts/JOSEFINSANS-VARIABLEFONT_WGHT (6).woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/JosefinSans-Italic-VariableFont_wght.woff2",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const displayFont = localFont({
  src: "../../public/fonts/MOSOW.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NodoArg",
  description: "Soluciones digitales con identidad visual azul electrico sobre negro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
