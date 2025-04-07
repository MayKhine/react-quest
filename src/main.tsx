import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { CountCompnent } from "./quests/CountComponent.tsx"
import { ShoppingCart } from "./quests/ShoppingCart.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/countcomponent" element={<CountCompnent />}></Route>
        <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
