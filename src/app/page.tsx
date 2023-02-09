import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import useFetch from "lib/useFetch";

export default async function Home() {
  const headerData = await useFetch("header")

  return (
    <>
      <Navbar />
      <main>
        <HeroSection title={headerData.data} />
      </main>
      <Footer />
    </>
  )
}
