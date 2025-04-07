import { useState } from "react"
import { Logo } from "../layout/Logo"
import { PopUp } from "../layout/PopUp"
import { IoIosCloseCircleOutline } from "react-icons/io"

export const ShoppingCart = () => {
  const initialItems = [
    { id: 1, name: "T-Shirt", quantity: 0 },
    { id: 2, name: "Jeans", quantity: 0 },
    { id: 3, name: "Shoes", quantity: 0 },
  ]

  const [items, setItems] = useState(initialItems)
  const [popUp, setPopUp] = useState(false)
  const addItem = (id: number) => {
    console.log("add item: ", id)
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setItems(updatedItems)
  }

  const removeItem = (id: number) => {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 }
      } else if (item.id === id && item.quantity == 0) {
        setPopUp(!popUp)
        return item
      } else {
        return item
      }
    })
    setItems(updatedItems)
  }
  let total = 0

  items.forEach((item) => {
    total = total + item.quantity
  })

  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      {popUp && (
        <PopUp
          onClose={() => {
            setPopUp(!popUp)
          }}
        >
          <div
            className="bg-myYellow w-3/5 p-5  rounded-md"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <div className="flex justify-end">
              <IoIosCloseCircleOutline
                size={30}
                className="cursor-pointer "
                onClick={() => {
                  setPopUp(false)
                }}
              />
            </div>
            <div className="p-5 flex justify-center">
              <p> Can't remove the item when quantity is 0.</p>
            </div>
          </div>
        </PopUp>
      )}
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Implement a shopping cart component that allows users to add and
            remove items. The cart should display a list of items with their
            quantities and provide controls to modify the quantities. You'll
            need to implement proper state management to track the items and
            their quantities, along with functions to update the cart state.
            Your implementation should demonstrate effective state management
            and proper handling of user interactions in React.
          </p>
          <p>Requirements:</p>
          <li>Display the list of items with their quantities</li>
          <li>
            Implement an addItem function that increases the quantity of an item
            when the + button is clicked.
          </li>
          <li>
            Implement a removeItem function that decreases the quantity of an
            item when the - button is clicked, but doesn't allow negative
            quantities.
          </li>
          <li>
            Show an alert when user click on the - button when quantity is 0.
          </li>
          <li>Display the total number of items in the cart.</li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-4 ">
            <div className="flex align-middle justify-center bg-myWhite p-2 min-w-50 rounded-md gap-2">
              <div>Total quantities: </div>
              <div className="font-bold">{total}</div>
            </div>

            {items.map((item) => {
              return (
                <div className="flex gap-4 items-center">
                  <div className="w-30"> {item.name}</div>
                  <div className="flex gap-4 items-center">
                    <p> quantity:</p>

                    <button
                      className="bg-myYellow hover:bg-myYellow/50 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        removeItem(item.id)
                      }}
                      // disabled={item.quantity == 0 ? true : false}
                    >
                      -
                    </button>
                    <p className="w-10 text-center"> {item.quantity}</p>
                    <button
                      className=" bg-myYellow hover:bg-myYellow/50 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        addItem(item.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
