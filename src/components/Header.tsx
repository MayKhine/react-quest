import { BreakpointNavContent } from "./BreakpointNavBarContent"
import { HeaderLeftSide } from "./HeaderLeftSide"

export const Header = () => {
  return (
    <div className="headerComponent">
      <div className="baseContainer">
        {/* <HeaderLeftSide /> */}
        <BreakpointNavContent
          big={<div> BIGGGG </div>}
          small={<div> small </div>}
        />
        <div className="centerDiv">Pendulum</div>
        {/* <div className="rightDiv">Account + cart</div> */}
        <BreakpointNavContent
          big={<div> BIGGGG </div>}
          small={<div> small </div>}
        />
      </div>
    </div>
  )
}
