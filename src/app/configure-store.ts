import { configureStore as configureReduxStore } from "@reduxjs/toolkit"
import debrisReducer from "features/debris"

export const configureStore = () => {
  return configureReduxStore({
    reducer: {
      debris: debrisReducer
    }
  })
}
