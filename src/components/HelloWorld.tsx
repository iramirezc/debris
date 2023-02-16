import React from "react"
import { log } from "utils/index"

export const HelloWorld: React.FC<{ message?: string }> = ({
  message = "Hello World!",
}) => {
  log("Hello World!")

  return <h1>{message}</h1>
}
