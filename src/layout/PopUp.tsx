type PopUpProps = {
  children: React.ReactNode //children is a valid react node
  onClose: () => void
}
export const PopUp = ({ children, onClose }: PopUpProps) => {
  return (
    <div className="bg-myWhite/50 top-0 left-0 z-10 w-full h-full min-h-screen fixed">
      <div
        // onClick={(e) => {
        //   e.stopPropagation()
        // }}
        onClick={onClose}
        className="h-full flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  )
}
