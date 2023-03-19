import BottomHero from "@/components/BottomHero";
import HeroSection from "@/components/HeroSection";
import CardsSection from "@/components/CardsSection";
import useFetch from "lib/useFetch";

export default async function Home() {
  const headerData = await useFetch("header/", "no-store")
  const cards = await useFetch("cards/", "no-store")

  return (
    <>
      <main>
        <HeroSection title={headerData.data} />
        <BottomHero />
        <CardsSection cards={cards.data} />
      </main>
    </>
  )
}
