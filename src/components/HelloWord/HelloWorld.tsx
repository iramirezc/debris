import React from "react"
import { log } from "utils"
import { StyledHelloWorld } from "./styles"

export const HelloWorld: React.FC<{ message?: string }> = ({
  message = "Hello World!"
}) => {
  log("Hello World!")

  React.useEffect(function () {
    window
      .fetch("/api/health/check")
      .then((response) => response.json())
      .then((data) => {
        console.log("MockServiceWorker->", data)
      })
      .catch((err) => console.error(err))
  }, [])

  return <StyledHelloWorld>{message}</StyledHelloWorld>
}
