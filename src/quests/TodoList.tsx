import { Logo } from "../layout/Logo"

export const TodoList = () => {
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>Quest TEST</p>
          <p>Requirements:</p>
          <li>Blah blah </li>
          <li>Blah blah </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          Work HERE
        </div>
      </div>
    </div>
  )
}
