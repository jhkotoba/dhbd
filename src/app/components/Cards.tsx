// src/app/components/Cards.tsx
'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import { fetchCards } from '../../features/cards/cardsSlice'
import Card from './Card'

export default function CardsClient() {
  const dispatch = useDispatch<AppDispatch>()
  const { items: cards, status } = useSelector((state: RootState) => state.cards)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCards())
    }
  }, [status, dispatch])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map(c => (
        <Card key={c.id} title={c.title} description={c.description} />
      ))}
    </div>
  )
}