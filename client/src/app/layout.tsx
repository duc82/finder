import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { BootstrapProvider } from "./providers/BootstrapProvider";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/main.scss";

import Header from "./components/Header";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finder",
  description: "Finder - Real estate marketplace"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <BootstrapProvider>
          <Header />
          {children}
        </BootstrapProvider>
      </body>
    </html>
  );
}
