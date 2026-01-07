'use client'

import Link from "next/link"

export default function ListItem(props) {

    return (
        <div className="list-bg">
            {
                props.result.map((a, i) =>
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + a._id}>
                            <h4>{a.title}</h4>
                        </Link>
                        <Link href={'/edit/' + a._id}>✏️</Link>
                        <span onClick={(e) => {
                            fetch('/api/post/delete', {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    id: a._id
                                })
                            }).then((r) => r.json)
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none'
                                    }, 1000)
                                })

                        }}>❌</span>
                        <p>{a.content}</p>
                    </div>
                )
            }
        </div>
    )
}