import { DropDown } from "./DropDown"
import { DropDownButton } from "./DropDownButton"

const shopButtons = [
  { item: "Metabolic Daily", subText: "Improve Metabolism" },
  { item: "Something Daily", subText: "Improve Something" },
  { item: "Another  Daily", subText: "Improve Another" },
]

const createDropDropnButton = (arr) => {
  const dropDownButtonArry = arr.map((e) => (
    <DropDownButton buttonText={e.item} subText={e.subText} />
  ))
  return dropDownButtonArry
}

export const HeaderLeftSide = () => {
  const shopDropDown = createDropDropnButton(shopButtons)

  return (
    <div className="leftDiv">
      <div className="over1024px">
        <DropDown mainButtonText="Shop Over 1024 px" buttons={shopDropDown} />

        <div> BIG BIG </div>
      </div>

      <div className="under1024px">
        <DropDown mainButtonText="Shop Under 1024 px" buttons={shopDropDown} />
        <div> Tiny</div>
      </div>
    </div>
  )
}
