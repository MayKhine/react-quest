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
import { ImageCarousel } from "./quests/ImageCarousel.tsx"
import { Timer } from "./quests/Timer.tsx"
import { TrafficLight } from "./quests/TrafficLight.tsx"
import { PendulumMockUp } from "./quests/PendulumMockUp.tsx"
import { ButtonComponent } from "./quests/ButtonCompnent.tsx"
import { HeaderComponent } from "./quests/HeaderComponent.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/countcomponent" element={<CountCompnent />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="/useprevioushook" element={<UsePreviousHook />}></Route>
        <Route path="/todolist" element={<TodoList />}></Route>
        <Route path="/imagecarousel" element={<ImageCarousel />}></Route>
        <Route path="/timer" element={<Timer />}></Route>
        <Route path="/trafficlight" element={<TrafficLight />}></Route>
        <Route path="/pendulummockup" element={<PendulumMockUp />}></Route>
        <Route path="/buttoncomponent" element={<ButtonComponent />}></Route>
        <Route path="/headercomponent" element={<HeaderComponent />}></Route>

        <Route path="/memo" element={<Memo />}></Route>
        <Route path="/reactsuspense" element={<ReactSuspense />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
