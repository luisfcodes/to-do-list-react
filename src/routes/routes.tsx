import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { Contact } from "../pages/Contact/Contact";
import { Features } from "../pages/Features/Features";
import { Pricing } from "../pages/Pricing/Pricing";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}