export default async function useFetch(url: string = "", cache: RequestCache = "force-cache") {
  const res = await fetch(`https://api2.duraj.org/${url}`, { cache: cache }); // this should check for the revalidate to {next: {revalidate: 1}}
  return res.json();
}