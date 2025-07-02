// src/features/cards/cardsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Card } from './types'

// 1) 샘플 데이터
const sampleCards: Card[] = [
  { id: 1, title: '매출 현황', description: '지난 달 대비 12% 상승' },
  { id: 2, title: '신규 가입자', description: '오늘 34명 가입' },
  { id: 3, title: '서버 상태',   description: '모든 인스턴스 정상' },
  { id: 4, title: '알림 수신',   description: '처리 대기 중 7건' },
]

// 2) Thunk: 실제로는 fetch('/api/cards') 등 호출
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  // TODO: 실제 API 호출로 대체
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