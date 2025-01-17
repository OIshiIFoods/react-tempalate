import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './modules/counter'

export const counterSliceActions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})
export default store
export type RootState = ReturnType<typeof store.getState>
