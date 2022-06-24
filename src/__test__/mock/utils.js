import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { postsInitialState } from "../../redux/slices/postsSlice";
import { posts } from "./data";

export const WrapProvider = (OriginalComponent) => {
  const mockStore = configureStore([thunk])({
    posts: {...postsInitialState, posts: posts},
  });

  return <Provider store={mockStore}>{OriginalComponent}</Provider>;
};
