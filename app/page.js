import { connectDB } from "@/util/database"

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum")
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      <h4>main site</h4>
      <p>hello</p>
    </div>
  );
}
