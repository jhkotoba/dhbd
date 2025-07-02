// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './features/cards/cardsSlice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
})

// 타입 추출
export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch