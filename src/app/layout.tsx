import type { Metadata } from "next";
import ThemeContextProvider from "@/hooks/ThemeContext";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s", default: "The Dominoes" },
  description: "The Dominoes Application",
  openGraph: {
    images: [
      `https://img.freepik.com/free-vector/black-blocks-frame-blank-black-background-vector_53876-67027.jpg`,
    ],
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
        className={`${space.className} min-h-screen bg-background text-foreground antialiased hover:cursor-default dark:bg-foreground dark:text-background`}
      >
        <ThemeContextProvider>
          <Backdrop />
          <div className="flex min-h-screen flex-col">
            <div className="flex flex-grow flex-col">{children}</div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
