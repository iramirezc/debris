import React from "react"
import { Provider } from "react-redux"
import { setupStore } from "app/store"
import { DebrisStatus, HelloWorld } from "components"

export const App = () => (
  <Provider store={setupStore()}>
    <HelloWorld />
    <span>from Debris app</span>
    <DebrisStatus />
  </Provider>
)
