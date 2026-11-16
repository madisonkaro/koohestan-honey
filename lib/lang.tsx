"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fa";

const STORAGE_KEY = "koohestan-lang:v1";

export interface ProductStrings {
  id: string;
  name: string;
  desc: string;
  chip: string;
  price: string;
  perKg: string;
  image: string;
  alt: string;
}

export interface Strings {
  nav: {
    brand: string;
    brandSuffix: string;
    collection: string;
    toggleEn: string;
    toggleFa: string;
  };
  hero: {
    scrollHint: string;
    overlays: { headline: string; sub: string }[];
  };
  products: {
    kicker: string;
    title: string;
    sub: string;
  };
  items: ProductStrings[];
  footer: {
    tagline: string;
    rights: string;
    instagram: string;
    x: string;
    backToTop: string;
  };
}

const STRINGS: Record<Lang, Strings> = {
  en: {
    nav: {
      brand: "KOOHESTAN",
      brandSuffix: "HONEY",
      collection: "The Collection",
      toggleEn: "EN",
      toggleFa: "FA",
    },
    hero: {
      scrollHint: "Scroll",
      overlays: [
        {
          headline: "From the mountain fields.",
          sub: "A bee leaves the hive at first light.",
        },
        {
          headline: "Fed on the finest flowers.",
          sub: "Thyme, astragalus, wild mountain bloom.",
        },
        {
          headline: "Brought home. Made into gold.",
          sub: "Nectar, carried home one flight at a time.",
        },
        {
          headline: "KOOHESTAN HONEY",
          sub: "Pour. Wait. Breathe.",
        },
      ],
    },
    products: {
      kicker: "The Collection",
      title: "Three honeys. One mountain.",
      sub: "Raw, unfiltered, and gathered by hand from the high fields.",
    },
    items: [
      {
        id: "mountain",
        name: "Mountain Honey",
        desc: "Wild mountain flora, gathered high above the valley. Deep amber, slow to pour, slow to forget.",
        chip: "Wild mountain flora",
        price: "1,480,000 Toman",
        perKg: "per kg",
        image: "/products/mountain.png",
        alt: "Glass jar of mountain honey with a wooden dipper",
      },
      {
        id: "thyme",
        name: "Thyme Honey",
        desc: "Thyme blossom honey — herbal, warm, and quietly floral.",
        chip: "Thyme blossom",
        price: "1,280,000 Toman",
        perKg: "per kg",
        image: "/products/thyme.png",
        alt: "Glass jar of thyme honey with a wooden dipper",
      },
      {
        id: "astragalus",
        name: "Astragalus Honey",
        desc: "Pale gold from astragalus bloom — light, clean, and gently sweet.",
        chip: "Astragalus bloom",
        price: "980,000 Toman",
        perKg: "per kg",
        image: "/products/astragalus.png",
        alt: "Glass jar of astragalus honey with a wooden dipper",
      },
    ],
    footer: {
      tagline: "Pure honey from the mountain fields.",
      rights: "© 2026 Koohestan Honey. All rights reserved.",
      instagram: "Koohestan Honey on Instagram",
      x: "Koohestan Honey on X",
      backToTop: "Back to top",
    },
  },
  fa: {
    nav: {
      brand: "عسل کوهستان",
      brandSuffix: "",
      collection: "مجموعه",
      toggleEn: "EN",
      toggleFa: "فا",
    },
    hero: {
      scrollHint: "اسکرول کن",
      overlays: [
        {
          headline: "از دامنه‌های کوهستان.",
          sub: "زنبور با اولین نور صبح از کندو بیرون می‌رود.",
        },
        {
          headline: "از بهترین گل‌ها تغذیه می‌کند.",
          sub: "آویشن، گون، گل‌های وحشی کوهستان.",
        },
        {
          headline: "به خانه می‌آورد. به طلا بدل می‌کند.",
          sub: "شهد، پرواز به پرواز به خانه می‌رسد.",
        },
        {
          headline: "عسل کوهستان",
          sub: "بچکان. صبر کن. نفس بکش.",
        },
      ],
    },
    products: {
      kicker: "مجموعه",
      title: "سه عسل. یک کوهستان.",
      sub: "خام، بدون فیلتر، و با دست از دامنه‌های بلند جمع‌آوری شده.",
    },
    items: [
      {
        id: "mountain",
        name: "عسل کوهستان",
        desc: "از گل‌های وحشی دامنه‌های بلند؛ کهربایی تیره، آرام می‌ریزد و دیر از یاد می‌رود.",
        chip: "گل‌های وحشی کوهستان",
        price: "۱٬۴۸۰٬۰۰۰ تومان",
        perKg: "هر کیلو",
        image: "/products/mountain.png",
        alt: "شیشه عسل کوهستان با ملاقه چوبی",
      },
      {
        id: "thyme",
        name: "عسل آویشن",
        desc: "عسل شکوفه‌ی آویشن؛ گیاهی، گرم و لطیف‌گل‌دار.",
        chip: "شکوفه‌ی آویشن",
        price: "۱٬۲۸۰٬۰۰۰ تومان",
        perKg: "هر کیلو",
        image: "/products/thyme.png",
        alt: "شیشه عسل آویشن با ملاقه چوبی",
      },
      {
        id: "astragalus",
        name: "عسل گون",
        desc: "طلایی روشن از شکوفه‌ی گون؛ سبک، پاک و شیرینِ ملایم.",
        chip: "شکوفه‌ی گون",
        price: "۹۸۰٬۰۰۰ تومان",
        perKg: "هر کیلو",
        image: "/products/astragalus.png",
        alt: "شیشه عسل گون با ملاقه چوبی",
      },
    ],
    footer: {
      tagline: "عسل خالص از دامنه‌های کوهستان.",
      rights: "© ۲۰۲۶ عسل کوهستان. همه‌ی حقوق محفوظ است.",
      instagram: "عسل کوهستان در اینستاگرام",
      x: "عسل کوهستان در ایکس",
      backToTop: "بازگشت به بالا",
    },
  },
};

interface LangValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
}

const LangContext = createContext<LangValue>({
  lang: "en",
  setLang: () => {},
  t: STRINGS.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  // Always render English first (matches the server render, so no hydration
  // mismatch), then sync the saved choice on the client after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "fa" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === "fa" ? "rtl" : "ltr";
      }
    } catch {
      /* storage unavailable — stay on English */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable — choice lasts for this visit only */
    }
    document.documentElement.lang = l;
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
