import { useEffect, useState } from "react"
import { Logo } from "../layout/Logo"

export const TrafficLight = () => {
  const trafficLightArr = [
    { id: 0, color: "red", delay: 5 },
    { id: 1, color: "green", delay: 5 },
    { id: 2, color: "yellow", delay: 2 },
  ]

  const [curLight, setCurLight] = useState(trafficLightArr[0])
  const [pause, setPause] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextId = (curLight.id + 1) % 3
      if (!pause) {
        setCurLight(trafficLightArr[nextId])
      }
    }, curLight.delay * 1000)

    console.log("intervalID: ", intervalId)
    return () => {
      clearInterval(intervalId)
    }
  }, [curLight, pause])

  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Create a Traffic light component hat switches between three states
            (Red, Yellow, Green) at regular intervals. The traffic light should
            change colors automatically, and each color should stay active for a
            fixed amount of time before switching to the next color.
          </p>
          <p>Requirements:</p>
          <li>
            The traffic light should have three states: Red, Yellow, and Green.
          </li>
          <li>The initial state of the traffic light should be Red.</li>
          <li>
            The light should automatically change from one color to the next
            after a set period of time: Red stays for 5 seconds, Yellow stays
            for 2 seconds and Green stays for 5 seconds.
          </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div
            style={{ backgroundColor: curLight.color }}
            className="bg-myWhite p-2 min-w-50 text-center rounded-md "
          >
            {curLight.color}
          </div>
          <button
            className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer w-20"
            onClick={() => {
              setPause(!pause)
            }}
          >
            Pause: {pause === true ? "True" : "False"}
          </button>
        </div>
      </div>
    </div>
  )
}
