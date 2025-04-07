import { useState } from "react"
import { Logo } from "../layout/Logo"
import { IoTrashBinOutline } from "react-icons/io5"

type todo = {
  id: number
  todo: string
  complete: boolean
}
export const TodoList = () => {
  const [todoText, setTodoText] = useState("")
  const [todoList, setTodoList] = useState<Array<todo>>([])

  const addTodo = () => {
    console.log("Add todo ", todoText)

    const newTodo = { id: todoList?.length, todo: todoText, complete: false }
    setTodoList([...todoList, newTodo])
    setTodoText("")
  }
  return (
    <div className="w-full p-10 bg-myWhite min-h-full h-auto">
      <Logo />
      <div className="w-full bg-myBlue flex flex-col justify-center items-center rounded-md p-10 gap-10">
        <div className="w-full bg-myLightBlue p-5 rounded-md">
          <p>Quest</p>
          <p>
            Implement a todo list component that allows users to add new todos,
            delete existing ones, and mark them as complete. The component
            should maintain a list of todos with their completion status and
            provide appropriate controls for managing them. Your implementation
            should demonstrate proper state management and event handling in
            React.
          </p>
          <p>Requirements:</p>
          <li>
            Implement an input field and button to add new todos. The input
            should clear after adding a todo.
          </li>
          <li>
            Each todo item should display its text and have a checkbox to toggle
            completion status.
          </li>
          <li>
            Implement a delete button for each todo that removes it from the
            list.
          </li>
          <li>Display the total number of incomplete todos.</li>
          <li>The add button should be disabled when the input is empty.</li>
        </div>
        <div className="w-full bg-myLightBlue p-5 rounded-md flex flex-col justify-center items-center gap-4">
          <div className="w-full flex gap-4 justify-center">
            <input
              className="bg-myWhite p-2 min-w-50 rounded-md "
              type="text"
              onChange={(e) => {
                setTodoText(e.target.value)
              }}
              value={todoText}
            />
            <button
              className="bg-myYellow hover:bg-myYellow/80 p-2 rounded-md cursor-pointer"
              onClick={addTodo}
            >
              Add Todo
            </button>
          </div>
          <div>0 items remaining</div>
          <div>
            {todoList.map((todo) => {
              return (
                <div className="flex flex-row bg-myWhite p-2">
                  <input type="checkbox" />
                  <div>{todo.todo}</div>
                  <IoTrashBinOutline />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
