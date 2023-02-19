import React from "react"
import { log } from "utils"
import { StyledHelloWorld } from "./styles"

export const HelloWorld: React.FC<{ message?: string }> = ({
  message = "Hello World!"
}) => {
  log("Hello World!")

  return <StyledHelloWorld>{message}</StyledHelloWorld>
}
