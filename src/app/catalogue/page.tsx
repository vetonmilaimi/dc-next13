import useFetch from "lib/useFetch";

export default async function Home() {
  const images = await useFetch("catalogue/", "no-store")

  console.log(images)
  return (
    <>
      <main>

      </main>
    </>
  )
}
