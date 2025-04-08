import { useState } from "react"
import { Logo } from "../layout/Logo"

export const ImageCarousel = () => {
  const imgArr = [
    { id: 0, color: "red" },
    { id: 1, color: "green" },
    { id: 2, color: "blue" },
  ]

  const [curImg, setCurImg] = useState(imgArr[0])

  const nextClick = (curId: number) => {
    const nextId = (curId + 1) % 3
    setCurImg(imgArr[nextId])
  }

  const prevClick = (curId: number) => {
    const prevId = (((curId - 1) % 3) + 3) % 3
    // console.log("curid: ", curId, "prevId: ", prevId, -1 % 3)
    setCurImg(imgArr[prevId])
  }

  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Create a simple image carousel. Use an array of colored squares
            (e.g., red, green, blue) as your images. Clicking Next or Prev
            cycles through them. When the user moves past the last image, wrap
            around to the first image (and vice versa). Minimal styling is
            fine—focus on the carousel logic. You must have a main div that
            shows the current color, and two buttons.
          </p>
          <p>Requirements:</p>
          <li>
            Maintain an array of "images" (colored squares) in state or as a
            constant. For each "current index," only that color is displayed
            inside a div.
          </li>
          <li>
            Include Prev and Next buttons to cycle through. Clicking Next on the
            last image should wrap around to the first, and clicking Prev on the
            first should wrap to the last.
          </li>
          <li>
            Display the color (e.g. 'red') inside the carousel div so it's
            testable. Minimal inline styling is fine to represent the colored
            square.
          </li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1>Image Carousel Challenge</h1>
            <div
              style={{ backgroundColor: curImg.color }}
              className="w-25 h-25 rounded-md flex justify-center items-center"
            >
              {curImg.color}
            </div>

            <div className="flex gap-2 border-2 p-2 rounded-md">
              {imgArr.map((img) => {
                return (
                  <div
                    style={{ backgroundColor: img.color }}
                    className="w-15 h-15 rounded-md flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      setCurImg(img)
                    }}
                  >
                    {img.color}
                  </div>
                )
              })}
            </div>
            <div className="flex gap-4 flex-row justify-between w-55">
              <button
                className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
                onClick={() => {
                  prevClick(curImg.id)
                }}
              >
                Prev
              </button>
              <button
                className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
                onClick={() => {
                  nextClick(curImg.id)
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
