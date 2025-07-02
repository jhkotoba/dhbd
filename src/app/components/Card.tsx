// src/app/components/Card.tsx
'use client'

import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  url: string
  description: string
}

export default function Card({ title, url, description }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-6 flex flex-col">
      {/* 이미지 자리 (나중에 <img> 로 교체) */}
      <div className="w-full h-40 bg-gray-200 rounded mb-4" />

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 flex-grow">{description}</p>
      <Link
        href={url}
        className="mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >이동 </Link>
    </div>
  )
}