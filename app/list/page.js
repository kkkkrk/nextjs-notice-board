import { connectDB } from "@/util/database"
import Link from "next/link"
import Detail from "../detail/[id]/page"
import DetailLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    console.log(result)
    return (
        <>
            <div className="list-bg">
                {
                    result.map((a, i) =>
                        <div className="list-item" key={i}>
                            <Link href={'/detail/' + a._id}>
                                <h4>{a.title}</h4>
                            </Link>
                            <DetailLink></DetailLink>
                            <p>{a.content}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}