import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../lib/lang";
import CustomCursor from "../components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500"],
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
