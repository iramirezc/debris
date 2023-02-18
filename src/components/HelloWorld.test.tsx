import React from "react"
import { render } from "@testing-library/react"
import { HelloWorld } from "./HelloWorld"

jest.mock("utils", () => ({
  log: jest.fn()
}))

describe("<HelloWorld/>", () => {
  test("renders with the default 'Hello World!' message", () => {
    const { container } = render(<HelloWorld />)

    expect(container.firstChild).toMatchSnapshot()
  })

  test("renders with the provided message", () => {
    const { getByRole } = render(<HelloWorld message="Auf Wiedersehen" />)

    expect(getByRole("heading")).toHaveTextContent("Auf Wiedersehen")
  })
})
