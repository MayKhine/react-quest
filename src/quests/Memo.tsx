import { FC, memo, useCallback, useMemo, useState } from "react"
import { Logo } from "../layout/Logo"

export const Memo = () => {
  const [count, setCount] = useState(0)

  const subComp2Onclick2 = useCallback(() => console.log("clicky"), [])

  const content = useMemo(() => {
    return <SubComponent2 onClick={() => console.log("clicky")} />
  }, [])

  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>Build a memoized component</p>
          <p>Requirements:</p>
          <li>
            make a button that has state, when you click it increment, make a
            sub component
          </li>
          <li>Blah blah </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <button
            className="bg-myWhite p-5"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            {count}
          </button>
          <SubComponent1 count={count} />
          {content}
          {/* <MemoSubComponent2 onClick={subComp2Onclick2} /> */}
        </div>
      </div>
    </div>
  )
}

type SubComponent1Props = {
  count: number
}
const SubComponent1: FC<SubComponent1Props> = ({ count }) => {
  console.log("SUb compoentn 1 here")

  return <div> Component 1: {count}</div>
}
type SubComponent2 = {
  onClick: () => void
}
const SubComponent2: FC<SubComponent2> = ({ onClick }) => {
  console.log("SUb compoentn 2 here")
  return <div onClick={onClick}> Component 2: Hello </div>
}

const MemoSubComponent2 = memo(SubComponent2)
