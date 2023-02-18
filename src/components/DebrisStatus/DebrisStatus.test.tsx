import React from "react"
import UserEvents from "@testing-library/user-event"
import { renderWithProviders } from "tests/utils"
import { DebrisStatus } from "./DebrisStatus"

describe("<DebrisStatus/>", () => {
  test("shows and toggles debris status", async () => {
    const { getByRole, getByText } = renderWithProviders(<DebrisStatus />)

    expect(getByText("status: idle")).toBeInTheDocument()

    await UserEvents.click(getByRole("button"))

    expect(getByText("status: loading")).toBeInTheDocument()
  })
})
