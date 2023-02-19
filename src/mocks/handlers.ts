import { rest } from "msw"

interface HealthCheckResponse {
  status: string
}

export const handlers = [
  rest.get<unknown, HealthCheckResponse>(
    "/api/health/check",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ status: "ok" }))
    }
  )
]
