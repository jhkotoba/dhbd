// src/app/layout.tsx
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 min-h-screen antialiased">
        <Providers>
          {/* 헤더/네비게이션 */}
          <main className="container mx-auto px-4 py-8">{children}</main>
          {/* 푸터 */}
        </Providers>
      </body>
    </html>
  )
}