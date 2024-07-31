import type { Metadata } from "next";
import { Chelsea_Market, Chewy } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Interface from "./layout/interface/Interface";
import Loading from "./layout/loading/Loading";
import ParticleController from "./layout/particleController/ParticleController";

const chelsea = Chelsea_Market({ subsets: ["latin"], weight: "400" });
const chewy = Chewy({ subsets: ["latin"], weight: "400" });

const title = "DeliciaRin";

const description =
  "Hi, I'm Delichan~ but you can call me Deli-!!! I'm a full-time freelance graphic designer. I'll assist you in your project 🌊🫧";
const banner = "https://i.ibb.co.com/1J1Sz2n/Eye-banner.png";
const url = "https://delidesign.cc";

export const metadata: Metadata = {
  title: title,
  metadataBase: new URL(url),
  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    siteId: "@deliciarin_",
    images: [banner],
  },
  description: description,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={chelsea.className}
        style={
          {
            "--fontMain": chelsea.style.fontFamily,
            "--fontAlt": chewy.style.fontFamily,
          } as CSSProperties
        }
      >
        <Loading />
        <Interface />
        {children}
      </body>
    </html>
  );
}
