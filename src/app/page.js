import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <button>
        <Link href={"food-page"}>Redirect To Food Page</Link>
      </button>
    </>
  );
}
