import { Logo } from "../layout/Logo"

export const CountCompnent = () => {
  return (
    <div className="w-full h-full p-10 bg-myWhite">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className=" bg-myLightBlue p-5 rounded-md">
          Design and implement a React counter component that maintains a
          numeric value and allows users to modify it through button
          interactions. The component should handle state updates and reflect
          changes immediately in the UI.
        </div>
        <div className=" bg-myLightBlue p-5 rounded-md">Work here</div>
      </div>
    </div>
  )
}
