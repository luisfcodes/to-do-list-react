import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Features } from "../pages/Features/Features";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </BrowserRouter>
  )
}