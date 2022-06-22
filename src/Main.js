import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import FormComponent from "./FormComponent";
import NavComponent from "./NavComponent";

export default function Main() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/todo" element={<App />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
