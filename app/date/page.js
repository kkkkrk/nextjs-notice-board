export default async function handler(요청, 응답) {
    const now = new Date();
    const dateString = now.toLocaleDateString('ko-KR');
    const timeString = now.toLocaleTimeString('ko-KR');
    return (
        <div>
            <h4>서버 시간 정보</h4>
            <p>조회</p>
            <p>날짜: {dateString}</p>
            <p>시간: {timeString}</p>
        </div>
    )
}
