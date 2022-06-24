import { mount } from "enzyme";
import moxios from "moxios";
import PostsComponent from "../PostsComponent";
import { WrapProvider } from "./mock/utils";

describe.only("PostsComponent", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should render the posts", () => {
    const wrapper = mount(WrapProvider(<PostsComponent />));
    const posts = wrapper.find(".post");
    expect(posts.length).toBeGreaterThan(0);
  });
});
