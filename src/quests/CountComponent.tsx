import { useState } from "react"
import { Logo } from "../layout/Logo"

export const CountCompnent = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Design and implement a React counter component that maintains a
            numeric value and allows users to modify it through button
            interactions. The component should handle state updates and reflect
            changes immediately in the UI.
          </p>
          <p>Requirements:</p>
          <li>Initialize a state variable count starting at 0</li>
          <li>Display the current count value within a paragraph element </li>
          <li>
            Implement a button that says "increment" which adds 1 to the current
            count
          </li>
          <li>
            Implement a button that says "decrement" which subtracts 1 from the
            current count
          </li>
          <li>
            Ensure the UI updates immediately when either button is clicked
          </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div className="bg-myWhite p-2 min-w-50 text-center rounded-md ">
            Count: {count}
          </div>
          <div className="flex gap-4 ">
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
              onClick={() => {
                setCount(count - 1)
              }}
            >
              Decrement
            </button>
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
