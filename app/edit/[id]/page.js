import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const params = await props.params
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(params.id) })
    console.log(result)
    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <button type="submit">button</button>
            </form>
        </div>
    )
}