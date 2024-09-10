import { configureStore } from '@reduxjs/toolkit'
import amazonReducer from './amazonSlice'
export const store = configureStore({
      reducer: {
            amazon: amazonReducer
      },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch