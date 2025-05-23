import { useState } from 'react'

export default function SermonWrite() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2>📖 설교 작성</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={10}
        style={{ width: '100%' }}
      />
    </div>
  )
}
