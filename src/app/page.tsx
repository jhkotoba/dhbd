// src/app/page.tsx
import CardsClient from './components/Cards'

export default function HomePage() {
  // 서버에서만 실행되는 로직(예: 세션 확인, 초기 데이터 포맷 등)을 여기서 처리할 수 있습니다.
  return (
    <section>
      <h1>대시보드</h1>
      <CardsClient />   {/* 리덕스를 사용하는 컴포넌트 */}
    </section>
  )
}