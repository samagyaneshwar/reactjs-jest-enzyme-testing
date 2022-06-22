import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoComponent from "./TodoComponent";
import FormComponent from "./FormComponent";
import NavComponent from "./NavComponent";

export default function MainComponent() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/todo" element={<TodoComponent />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="*" element={<TodoComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
