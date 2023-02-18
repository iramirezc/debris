import { createSlice } from "@reduxjs/toolkit"

interface DebrisState {
  status: "idle" | "loading"
}

const initialState: DebrisState = {
  status: "idle"
}

export const debrisSlice = createSlice({
  name: "debris",
  initialState,
  reducers: {
    idle: (debris) => {
      debris.status = "idle"
    },
    loading: (debris) => {
      debris.status = "loading"
    }
  }
})

export const { idle, loading } = debrisSlice.actions

export default debrisSlice.reducer
