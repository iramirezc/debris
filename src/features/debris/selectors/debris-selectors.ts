import type { RootState } from "app/store"

export const selectStatus = (state: RootState) => state.debris.status
