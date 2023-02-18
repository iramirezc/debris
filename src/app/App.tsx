import React from "react"
import { Provider } from "react-redux"
import store from "app/store"
import { HelloWorld } from "components"

export const App = () => (
  <Provider store={store}>
    <HelloWorld />
    <span>from Debris app</span>
  </Provider>
)
