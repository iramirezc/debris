import { configureStore } from "@reduxjs/toolkit"
import { debrisSlice } from "./debris-slice"

describe("Debris Slice", () => {
  test("feature implementation within a store", () => {
    const store = configureStore({ reducer: debrisSlice.reducer })

    expect(store.getState()).toEqual({ status: "idle" })

    store.dispatch(debrisSlice.actions.loading())

    expect(store.getState()).toEqual({ status: "loading" })
  })
})
