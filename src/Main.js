import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import FormComponent from "./FormComponent";
import NavComponent from "./NavComponent";

export default function Main() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="*" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
