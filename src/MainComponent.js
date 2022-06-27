import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoComponent from "./TodoComponent";
import FormComponent from "./FormComponent";
import NavComponent from "./NavComponent";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PostsComponent from "./PostsComponent";

export default function MainComponent() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/todo" element={<TodoComponent />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route path="*" element={<TodoComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
