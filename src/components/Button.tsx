import { useState } from "react"

type ButtonProps = {
  iconAlignment: "noIcon" | "iconBefore" | "iconAfter"
  icon?: string
  buttonAction?: "action" | "destructive"
  buttonText: string
  buttonType?: "primary" | "secondary" | "tertiary"
  disabled?: boolean
}

const baseStyle: React.CSSProperties = {
  color: "white",
  padding: ".5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  borderRadius: ".3rem",
  display: "flex",
  gap: ".5rem",
}

const blueArr = ["#2086D5", "#3C9AE2", "#1B70B1"]
const redArr = ["#E21B1B", "#EA4848", "#C91818"]
const lightGrayBlue = "#C3D0DA"
const lightGrayRed = "#D1C3C3"

const getBgColor = (buttonType: string, buttonAction: string) => {
  if (buttonType === "primary") {
    return buttonAction === "action" ? blueArr[0] : redArr[0]
  }

  return "white"
}

const getTextColor = (buttonType: string, buttonAction: string) => {
  if (buttonType === "primary") {
    return "white"
  }

  return buttonAction === "action" ? blueArr[0] : redArr[0]
}

const getBgColorHover = (buttonType: string, buttonAction: string) => {
  if (buttonType === "primary") {
    return buttonAction === "action" ? blueArr[1] : redArr[1]
  }

  return buttonAction === "action" ? lightGrayBlue : lightGrayRed
}

const getBgColorPressed = (buttonType: string, buttonAction: string) => {
  if (buttonType === "primary") {
    return buttonAction === "action" ? blueArr[2] : redArr[2]
  }

  return buttonAction === "action" ? lightGrayBlue : lightGrayRed
}

const getBorderStyleFocus = (buttonType: string, buttonAction: string) => {
  if (buttonType === "primary") {
    return "2px solid white"
  }

  return buttonAction === "action" ? "2px solid blue" : "2px solid red"
}
export const Button = ({
  iconAlignment = "noIcon",
  buttonAction = "action",
  icon,
  buttonText,
  buttonType = "primary",
  disabled,
}: ButtonProps) => {
  const [onHover, setOnHover] = useState(false)
  const [onPress, setOnPress] = useState(false)
  const [onFocus, setOnFocus] = useState(false)
  // const [isDisabled, setIsDisabled] = useState(false)

  const defaultBgColor = getBgColor(buttonType, buttonAction)
  const defaultTextColor = getTextColor(buttonType, buttonAction)

  const hoverBgColor = getBgColorHover(buttonType, buttonAction)
  const pressedBgColor = getBgColorPressed(buttonType, buttonAction)
  const borderStyle = getBorderStyleFocus(buttonType, buttonAction)
  const buttonActionStyle: React.CSSProperties = {
    backgroundColor: disabled
      ? "lightgray"
      : onPress
      ? pressedBgColor
      : onHover
      ? hoverBgColor
      : defaultBgColor,
    color: disabled ? "gray" : defaultTextColor,
    outline: onFocus ? borderStyle : "",
    cursor: disabled ? "cursor" : "pointer",
  }

  return (
    <div>
      <div>
        Button: {iconAlignment}, {icon}, {buttonText}, {buttonType}
        CLICK HERE FOR BLURRRR
      </div>
      <button
        style={{ ...baseStyle, ...buttonActionStyle }}
        // className="buttonTEST"
        onMouseEnter={() => {
          setOnHover(true)
        }}
        onMouseLeave={() => {
          setOnHover(false)
        }}
        onMouseDown={() => {
          setOnPress(true)
        }}
        onMouseUp={() => {
          setOnPress(false)
        }}
        onFocus={() => {
          console.log("button is focused")
          setOnFocus(true)
        }}
        onBlur={() => {
          console.log("button is BLUERRRR")
          setOnFocus(false)
        }}
        disabled={disabled}
      >
        <p> {iconAlignment === "iconBefore" ? icon : ""}</p>
        <p>{buttonText}</p>
        <p> {iconAlignment === "iconAfter" ? icon : ""}</p>
      </button>
    </div>
  )
}
