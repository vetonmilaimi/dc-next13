export default async function useFetch(url: string = "", cache: RequestCache = "force-cache") {
  const res = await fetch(`http:localhost:3001/${url}`, { cache: cache }); // this should check for the revalidate to {next: {revalidate: 1}}
  return res.json();
}