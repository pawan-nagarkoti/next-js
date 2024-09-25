import Link from "next/link";

async function ap(url) {
  const a = await fetch(url);
  return a.json();
}
export default async function page({ params }) {
  const g = await ap(`https://jsonplaceholder.typicode.com/posts/${params?.detail}`);
  return (
    <>
      <h1>Detail Page</h1>
      <p>{g.id}</p>
      <p>{g.body}</p>
      <button>
        <Link href={"/food-page"}>Go Back</Link>
      </button>
    </>
  );
}
