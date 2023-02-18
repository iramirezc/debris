import React, { PropsWithChildren } from "react"
import { Provider } from "react-redux"
import type { PreloadedState } from "@reduxjs/toolkit"
import { render } from "@testing-library/react"
import type { RenderOptions } from "@testing-library/react"
import { setupStore } from "app/store"
import type { RootState, AppStore } from "app/store"

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

const renderWithProviders = (
  component: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) }
}

export { render, renderWithProviders }
