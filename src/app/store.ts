import { configureStore } from "@reduxjs/toolkit"
import debrisReducer from "features/debris"

const store = configureStore({
  reducer: {
    debris: debrisReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
