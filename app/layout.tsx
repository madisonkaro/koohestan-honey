import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LangProvider } from "../lib/lang";
import CustomCursor from "../components/CustomCursor";

// Fonts are self-hosted (app/fonts/) so the build never needs to reach
// Google Fonts — the Vercel build failed on next/font/google's runtime fetch.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/cormorant-400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = localFont({
  src: [
    { path: "./fonts/vazirmatn-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/vazirmatn-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/vazirmatn-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOOHESTAN HONEY — عسل کوهستان",
  description:
    "Pure honey from the mountain fields. A bee flies to the finest flowers and brings the nectar home — that honey is our product.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${inter.variable} ${vazirmatn.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved language + direction before first paint so the
            page never flashes in the wrong direction. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('koohestan-lang:v1');if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-black font-sans text-cream">
        <LangProvider>
          {children}
          <CustomCursor />
          {/* Film grain overlay */}
          <div
            className="film-grain pointer-events-none fixed inset-0 z-[90] opacity-[0.04]"
            aria-hidden="true"
          />
        </LangProvider>
      </body>
    </html>
  );
}
