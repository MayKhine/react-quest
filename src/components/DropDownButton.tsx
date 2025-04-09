type DropDownButtonProps = {
  buttonText: string
  subText?: string
}

export const DropDownButton = ({
  buttonText,
  subText,
}: DropDownButtonProps) => {
  return (
    <button className="button">
      <div> {buttonText}</div>
      <div>{subText}</div>
    </button>
  )
}
