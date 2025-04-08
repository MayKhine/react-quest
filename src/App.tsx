import { useNavigate } from "react-router"
import { Logo } from "./layout/Logo"
export const App = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
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
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/useprevioushook")
          }}
        >
          UsePrevious Hook
        </div>
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/todolist")
          }}
        >
          Todo List Manager
        </div>

        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/imagecarousel")
          }}
        >
          Image Carousel
        </div>
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/timer")
          }}
        >
          Timer
        </div>
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/trafficlight")
          }}
        >
          Traffic Light
        </div>

        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/memo")
          }}
        >
          Memo
        </div>
        <div
          className="bg-myLightBlue hover:bg-myLightBlue/80 w-60 h-30 rounded-md flex justify-center items-center cursor-pointer"
          onClick={() => {
            navigate("/reactsuspense")
          }}
        >
          React Suspense
        </div>
      </div>
    </div>
  )
}
