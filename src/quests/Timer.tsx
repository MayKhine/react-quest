import { useEffect, useState } from "react"
import { Logo } from "../layout/Logo"

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval = 0

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000) //every second
    }
    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const formatTime = (ticks: number) => {
    const hours = Math.floor(ticks / 3600) // Convert seconds to hours
    const minutes = Math.floor((ticks % 3600) / 60) // Convert remaining seconds to minutes
    const seconds = Math.floor(ticks % 60) // Remaining seconds

    const pad = (num: number) => String(num).padStart(2, "0") // Add leading zero for single-digit values

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>Timer: Build a timer that can be started, paused and reset.</p>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div className="bg-myWhite p-2 min-w-50 text-center rounded-md ">
            <div>Timer </div> <div>{formatTime(time)}</div>
          </div>
          <div className="w-full flex gap-4 justify-center">
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer w-20"
              onClick={() => {
                setIsRunning(true)
              }}
            >
              Start
            </button>
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer w-20"
              onClick={() => {
                setIsRunning(false)
              }}
            >
              Pause
            </button>
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer w-20"
              onClick={() => {
                setIsRunning(false)
                setTime(0)
                setIsRunning(true)
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
