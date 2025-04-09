import { useState } from "react"

type DropDownProps = {
  mainButtonText: string
  buttons: Array<React.ReactNode>
}
export const DropDown = ({ mainButtonText, buttons }: DropDownProps) => {
  const [onClick, setOnClick] = useState(false)
  return (
    <div
      onMouseLeave={() => {
        setOnClick(false)
      }}
    >
      <button
        onClick={() => {
          setOnClick(true)
        }}
        onMouseEnter={() => {
          setOnClick(true)
        }}
      >
        {mainButtonText}
      </button>

      {onClick && (
        <div className="dropdownDiv">
          {buttons.map((button) => {
            return button
          })}
        </div>
      )}
    </div>
  )
}
