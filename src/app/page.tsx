// src/app/page.tsx
import Cards from './components/Cards'

export default function HomePage() {
  // 서버에서만 실행되는 로직(예: 세션 확인, 초기 데이터 포맷 등)
  return (
    <section>
      <h1>대시보드1</h1>
      <Cards />
    </section>
  )
}