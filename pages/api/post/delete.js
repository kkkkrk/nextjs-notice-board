import { connectDB } from "@/util/database";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    console.log(req.body)
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method Not Allowed' })
    }
    try {
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').deleteOne(
            { _id: new ObjectId(req.body) }
        )
        if (result.deletedCount === 1) {
            res.status(200).json({ message: '성공적으로 삭제되었습니다.' });
        } else {
            res.status(404).json({ message: '삭제할 데이터를 찾을 수 없습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류가 발생했습니다.', error: error.message });
    }
}