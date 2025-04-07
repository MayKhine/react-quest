import { useNavigate } from "react-router"

export const Logo = () => {
  const navigate = useNavigate()
  return (
    <div
      className="bg-myPink w-full hover:bg-myPink/80 p-5 mb-10 text-xl font-bold rounded-md text-center cursor-pointer"
      onClick={() => {
        navigate("/")
      }}
    >
      React Quest
    </div>
  )
}
