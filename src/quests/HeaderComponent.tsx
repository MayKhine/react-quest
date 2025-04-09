import { Header } from "../components/Header"
import { Logo } from "../layout/Logo"
import "../Header.css"

export const HeaderComponent = () => {
  return (
    <div>
      <div>
        <Logo />
        <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
          <div className="w-full bg-myLightBlue p-5 rounded-md">
            <p>Quest</p>
            <p>Header Component </p>
            <p>Requirements:</p>
            <li>Left Side: Shop dropdown , HealthCare providers dropdown</li>
            <li>Center: Logo </li>
            <li>Account info and cart </li>
          </div>
        </div>
      </div>
      <Header />
    </div>
  )
}
