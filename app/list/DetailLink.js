'use client'

import { useRouter } from "next/navigation"

export default function DetailLink() {
    let router = useRouter()
    return (
        <button onClick={() => { router.forward() }}>앞으로 가기</button>
    )
}