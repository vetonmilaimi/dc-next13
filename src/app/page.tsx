import BottomHero from "@/components/BottomHero";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import useFetch from "lib/useFetch";

export default async function Home() {
  const headerData = await useFetch("header")

  return (
    <>
      <main>
        <HeroSection title={headerData.data} />
        <BottomHero />
        <Services />
      </main>
    </>
  )
}
