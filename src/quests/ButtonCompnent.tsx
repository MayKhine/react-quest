import { Button } from "../components/Button"
import { Logo } from "../layout/Logo"

export const ButtonComponent = () => {
  const iconBeforeORAfter: "iconAfter" | "iconBefore" = "iconAfter"
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>Button Component Desing</p>
          <p>Requirements:</p>
          <li>3 types of icon variables: no icon, icon before, icon after </li>
          <li>2 types of button action: action and destructive </li>
          <li>3 types of button: primary, secondary and tertiary</li>
          <li>2 button states: default, hover, pressed, focus and disabled</li>
          <li>2 other props: button text and icon</li>
        </div>
        <div className="w-full bg-gray-500 p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <Button
            iconAlignment="noIcon"
            buttonAction="action"
            buttonText="Button"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="action"
            buttonText="Button"
            icon="<<"
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="action"
            buttonText="Button"
            icon=">>"
          />
          <div> ------ </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="destructive"
            buttonText="Button"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="destructive"
            buttonText="Button"
            icon="<<"
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="destructive"
            buttonText="Button"
            icon=">>"
          />
          --
          <Button
            iconAlignment="noIcon"
            buttonAction="action"
            buttonText="Button"
            disabled={true}
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="action"
            buttonText="Button"
            icon="<<"
            disabled={true}
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="action"
            buttonText="Button"
            icon=">>"
            disabled={true}
          />
          <div> ------ </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="destructive"
            buttonText="Button"
            disabled={true}
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="destructive"
            buttonText="Button"
            icon="<<"
            disabled={true}
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="destructive"
            buttonText="Button"
            icon=">>"
            disabled={true}
          />
          <div> ------- secondary </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="action"
            buttonText="Button"
            buttonType="secondary"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="action"
            buttonText="Button"
            icon="<<"
            buttonType="secondary"
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="action"
            buttonText="Button"
            icon=">>"
            buttonType="secondary"
          />
          <div> ------ </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="destructive"
            buttonText="Button"
            buttonType="secondary"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="destructive"
            buttonText="Button"
            icon="<<"
            buttonType="secondary"
          />
          <Button
            iconAlignment={iconBeforeORAfter}
            buttonAction="destructive"
            buttonText="Button"
            icon=">>"
            buttonType="secondary"
          />
          <div> ------- tertiary </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="action"
            buttonText="Button"
            buttonType="tertiary"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="action"
            buttonText="Button"
            icon="<<"
            buttonType="tertiary"
          />
          <Button
            iconAlignment="iconAfter"
            buttonAction="action"
            buttonText="Button"
            icon=">>"
            buttonType="tertiary"
          />
          <div> ------ </div>
          <Button
            iconAlignment="noIcon"
            buttonAction="destructive"
            buttonText="Button"
            buttonType="tertiary"
          />
          <Button
            iconAlignment="iconBefore"
            buttonAction="destructive"
            buttonText="Button"
            icon="<<"
            buttonType="tertiary"
          />
          <Button
            iconAlignment={iconBeforeORAfter}
            buttonAction="destructive"
            buttonText="Button"
            icon=">>"
            buttonType="tertiary"
          />
        </div>
      </div>
    </div>
  )
}
