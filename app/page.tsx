import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import Footer from "../components/Footer";

// Products is below the fold: code-split it so it does not ship in the
// initial bundle.
const Products = dynamic(() => import("../components/Products"), {
  loading: () => (
    <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36" aria-hidden="true">
      <div className="h-8 w-48 animate-pulse rounded bg-white/5 mx-auto" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroVideo />
        <Products />
      </main>
      <Footer />
    </>
  );
}
