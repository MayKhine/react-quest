import { useEffect, useRef, useState } from "react"
import { Logo } from "../layout/Logo"

export const UsePreviousHook = () => {
  const usePrevious = (value: number) => {
    const prev = useRef<undefined | number>(undefined)

    useEffect(() => {
      prev.current = value
    }, [value])
    return prev.current
  }

  const [count, setCount] = useState<number>(0)
  const prev = usePrevious(count)

  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Create a custom hook called usePrevious that stores and returns the
            previous value of a state variable. Use a component that displays
            both the current and previous values. Provide an Increment button
            that updates the current value, so we can observe the change in the
            previous value.
          </p>
          <p>Requirements:</p>
          <li>
            Implement the usePrevious hook that accepts a value and returns its
            previous state.
          </li>
          <li>
            Update the current value using a button to observe if usePrevious
            updates as expected.
          </li>
          <li>
            Initially, the previous value can be displayed as N/A when there is
            no previous state.
          </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <h1 data-testid="current-count">Current: {count}</h1>
          <h2 data-testid="prev-count">
            Previous: {prev === undefined ? "N/A" : prev}
          </h2>
          <button
            className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
            data-testid="increment-btn"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}
