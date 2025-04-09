type BreakpointNavBarContentProps = {
  big: React.ReactNode
  small: React.ReactNode
}

export const BreakpointNavContent = ({
  big,
  small,
}: BreakpointNavBarContentProps) => {
  return (
    <div>
      <div className="over1024px">{big}</div>

      <div className="under1024px">{small} </div>
    </div>
  )
}
