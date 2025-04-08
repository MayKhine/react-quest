import { useState } from "react"
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2"

export const PendulumMockUp = () => {
  const imagesArr = [
    "https://pendulumlife.com/cdn/shop/files/158FD2AE-8BEE-4A86-8DEA-7EFFCB6CB257.jpg?v=1740072010&width=700",
    "https://pendulumlife.com/cdn/shop/products/PDP_Hero_MBD_what-to-expect_900x900-2-min_e9509ff6-7fc5-4c3b-b5af-01e7d4b7f21b.jpg?v=1737142687&width=700",
    "https://pendulumlife.com/cdn/shop/files/PMD_instructions_900x900_2x-min_2e2d7a25-5f4c-4611-bb70-34f48fa041c4.jpg?v=1737142687&width=700",
    "https://pendulumlife.com/cdn/shop/files/ProbioticComparisonChart_675x675_2x-min_7709697f-b4d8-4351-bf46-0b28923236fc.jpg?v=1738977653&width=700",
    "https://pendulumlife.com/cdn/shop/files/PMD-label-NON-GMO-900x900_2x_6cdede71-5468-4a81-aa4e-092190921f04.jpg?v=1738977653&width=700",
  ]

  const [contentIndex, setContentIndex] = useState(0)

  const nextButtonClick = (curIndex: number) => {
    const nextIndex = (curIndex + 1) % 5
    setContentIndex(nextIndex)
  }

  const prevButtonClick = (curIndex: number) => {
    const prevIndex = (curIndex - 1 + 5) % 5
    setContentIndex(prevIndex)
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>
        <div style={{ backgroundColor: "purple", color: "white" }}></div>
        <div> Pendulum </div>
      </header>
      <div style={{ backgroundColor: "lightgray", maxWidth: "90rem" }}>
        <div
          style={{
            padding: "4rem",
            width: "100%",
            display: "flex",
            gap: "4rem",
            maxHeight: "60rem",
          }}
        >
          <div style={{ display: "flex", width: "60%", gap: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: "5rem",
                maxWidth: "8rem",
                width: "8rem",
              }}
            >
              {imagesArr.map((img, index) => {
                if (img === imagesArr[contentIndex]) {
                  return (
                    <div
                      key={index + img}
                      style={{ border: "1px solid black", padding: ".4rem" }}
                    >
                      <img src={img} />
                    </div>
                  )
                }
                return (
                  <div
                    key={index + img}
                    style={{ padding: ".4rem" }}
                    onClick={() => {
                      setContentIndex(index)
                    }}
                  >
                    <img src={img} />
                  </div>
                )
              })}
            </div>
            <div
              style={{
                minWidth: "20rem",
                maxWidth: "50rem",
                gap: "1rem",
                display: "flex",
                flexDirection: "column",
                aspectRatio: "1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden", // Ensures only one image is shown at a time
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    transition: "transform 0.5s ease", // Smooth sliding transition
                    transform: `translateX(-${contentIndex * 100}%)`, // Adjusting based on the content index
                    // transform: `translateY(-${contentIndex * 100}%)`, // Adjusting based on the content index for vertical movement
                  }}
                >
                  {imagesArr.map((img, index) => {
                    console.log("img: ", index)
                    return (
                      <div
                        key={index}
                        style={{ minWidth: "100%", height: "auto" }}
                      >
                        <img
                          src={img}
                          alt={`Img ${index}`}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* <img src={imagesArr[contentIndex]} alt="Img description" /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                  gap: "1rem",
                }}
              >
                <button
                  style={{
                    border: ".5px solid black",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderRadius: "2rem",
                    cursor: "pointer",
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    prevButtonClick(contentIndex)
                  }}
                >
                  <HiOutlineArrowLongLeft size={35} />
                </button>
                <button
                  style={{
                    border: ".5px solid black",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderRadius: "2rem",
                    cursor: "pointer",
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    nextButtonClick(contentIndex)
                  }}
                >
                  <HiOutlineArrowLongRight size={35} />
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "40%",
              paddingLeft: "1rem",
            }}
          >
            <header style={{ fontSize: "2rem" }}> Metabolic Daily </header>
            <span style={{ display: "flex" }}>
              <div> Starts</div> <p> Num of reviews</p>
            </span>
            <span
              style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
            >
              <p>4-in-1 daily probiotic</p>
              <p>
                This five-strain probiotic rebalances the gut for digestive
                health, enhancing metabolic function, supporting a healthy
                immune system, and helping to maintain a healthy weight.
              </p>
            </span>
            <div style={{ height: "20rem", backgroundColor: "pink" }}>
              Purchase Section
            </div>
          </div>
        </div>
        <div style={{ minHeight: "40rem", backgroundColor: "pink" }}>
          Another div
        </div>
        <div>How it works</div>
        <div>The right strains for metabolic health</div>
        <div>
          REVIES
          <div> Review HEader</div>
          <div>Actual reviews</div>
        </div>
        <div>Other products </div>
        <div> Q/ A</div>
        <footer>Footer</footer>
      </div>
    </div>
  )
}
