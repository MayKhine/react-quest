import { useNavigate } from "react-router"
import { Logo } from "./layout/Logo"
export const App = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full p-10 bg-myWhite">
      <Logo />
      <div className="w-full flex flex-row flex-wrap gap-4">
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer "
          onClick={() => {
            navigate("/countcomponent")
          }}
        >
          Count Component
        </div>
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/shoppingcart")
          }}
        >
          Shopping Cart
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          UsePrevious Hook
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
        <div className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer">
          Todo List Manager
        </div>
      </div>
    </div>
  )
}
