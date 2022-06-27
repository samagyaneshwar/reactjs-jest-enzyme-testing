import moxios from "moxios";
import Sinon from "sinon";
import { url, getPosts, deletePostById } from "../api";
import { posts } from "./mock/data";

describe("API test", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should return the posts", (done) => {
    moxios.stubRequest(url("posts"), {
      status: 200,
      response: posts,
    });

    let onFulfilled = Sinon.spy();
    getPosts().then(onFulfilled);

    moxios.wait(() => {
      const response = onFulfilled.getCall(0).args[0].data;
      expect(response).toEqual(posts);
      done();
    });
  });

  it("should delete the post", (done) => {

    const post = posts[0];

    moxios.stubRequest(url("posts/1"), {
      status: 200,
      response: post,
    });

    let onFulfilled = Sinon.spy();
    deletePostById(post.id).then(onFulfilled);

    moxios.wait(() => {
      const response = onFulfilled.getCall(0).args[0].data;
      expect(response).toEqual(post);
      done();
    });
  });
});
