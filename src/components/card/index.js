import Link from "next/link";

export default function Card({ data }) {
  return (
    <>
      {data?.map((v, index) => (
        <Link href={`/food-page/${v.id}`} key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{v.title}</h5>
              <p>{v.body}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
