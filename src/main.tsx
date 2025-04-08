import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { CountCompnent } from "./quests/CountComponent.tsx"
import { ShoppingCart } from "./quests/ShoppingCart.tsx"
import { UsePreviousHook } from "./quests/UsePreviousHook.tsx"
import { TodoList } from "./quests/TodoList.tsx"
import { Memo } from "./quests/Memo.tsx"
import { ReactSuspense } from "./quests/ReactSuspense.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/countcomponent" element={<CountCompnent />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/useprevioushook" element={<UsePreviousHook />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
        <Route path="/reactsuspense" element={<ReactSuspense />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
