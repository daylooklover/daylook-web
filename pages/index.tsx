import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>말씀노트</h1>
      <p>AI로 복음을 품다</p>
      <Link href="/sermon-write">
        <button style={{ marginTop: '1rem' }}>✍ 말씀 쓰러 가기</button>
      </Link>
    </main>
  )
}
