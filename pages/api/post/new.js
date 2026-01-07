import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        if (요청.body.title == '' && 요청.body.content == '') {
            return 응답.status(500).json('너 왜 제목, 내용 안 씀')
        }
        if (요청.body.title == '') {
            return 응답.status(500).json('너 왜 제목 안 씀')
        }
        if (요청.body.content == '') {
            return 응답.status(500).json('너 왜 내용 안 씀')
        }
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').insertOne(요청.body)
            응답.status(200).redirect('/list')
        } catch (error) {
            return 응답.status(500).json("mongodb에 저장 안됨")
        }
    }
}