import { Card } from "../../components";

async function getPostData(url) {
  const response = await fetch(url);
  return response.json();
}

export default async function FoodPage() {
  const apiResponse = await getPostData("https://jsonplaceholder.typicode.com/posts");
  //   console.log(apiResponse);
  return (
    <>
      <section className="container-fluid">
        <div className="container my-5">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
            <Card data={apiResponse} />
          </div>
        </div>
      </section>
    </>
  );
}
