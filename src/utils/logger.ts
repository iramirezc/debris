import { getTime } from "./time"

export const log = (message: string) => console.log(`${getTime()}:`, message)
