import React from "react"
import { useAppDispatch, useAppSelector } from "app/hooks"
import { selectStatus, loading, idle } from "features/debris"

export const DebrisStatus = () => {
  const dispatch = useAppDispatch()
  const debrisStatus = useAppSelector(selectStatus)

  const handleOnClick = () => {
    if (debrisStatus === "idle") {
      dispatch(loading())
    } else {
      dispatch(idle())
    }
  }

  return (
    <div>
      <button onClick={handleOnClick}>⚙️</button>{" "}
      <pre style={{ display: "inline" }}>status: {debrisStatus}</pre>
    </div>
  )
}
