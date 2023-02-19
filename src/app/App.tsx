import React from "react"
import { Provider } from "react-redux"
import { setupStore } from "app/store"
import { HelloWorld } from "components"
import { DebrisStatus } from "features/debris/components"

export const App = () => (
  <Provider store={setupStore()}>
    <HelloWorld />
    <span>from Debris app</span>
    <DebrisStatus />
  </Provider>
)
