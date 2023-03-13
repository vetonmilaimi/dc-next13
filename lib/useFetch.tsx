export default async function useFetch(url: string = "", cache: RequestCache = "force-cache") {
  const envUrl = process.env.REACT_APP_API_URL
  const res = await fetch(`${envUrl}/${url}`, { cache: cache }); // this should check for the revalidate to {next: {revalidate: 1}}
  return res.json();
}