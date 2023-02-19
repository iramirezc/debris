import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "app"
import { worker } from "mocks"

async function start() {
  const container = document.getElementById("root")
  const root = createRoot(container)

  root.render(<App />)

  if (process.env.NODE_ENV === "development") {
    await worker.start()
  }
}

void start()
