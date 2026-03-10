// src/features/cards/cardsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Card } from './types'

const sampleCards: Card[] = [
  { id: 0, title: 'ast', url: `/ast`, description: 'asset tracker' },
  { id: 1, title: 'wg', url: `/game`, description: 'web game' },
  { id: 2, title: '신규 가입자', url: '/', description: '오늘 34명 가입' },
  { id: 3, title: '서버 상태', url: '/', description: '모든 인스턴스 정상' },
  { id: 4, title: '알림 수신', url: '/', description: '처리 대기 중 7건' },
]

// 샘플데이터
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {  
  return sampleCards
})

interface CardsState {
  items: Card[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CardsState = {
  items: [],
  status: 'idle',
  error: null,
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // (추후 필요 시) 동기 액션 정의
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to load cards'
      })
  },
})

export default cardsSlice.reducer
