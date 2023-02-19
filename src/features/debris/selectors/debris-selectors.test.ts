import { selectStatus } from "./debris-selectors"

describe("Debris Selectors", () => {
  describe("selectStatus()", () => {
    test("returns the correct status", () => {
      const result = selectStatus({ debris: { status: "loading" } })

      expect(result).toBe("loading")
    })
  })
})
