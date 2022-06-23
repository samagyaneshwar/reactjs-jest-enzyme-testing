const { default: axios } = require("axios");
const moxios = require("moxios");
const Sinon = require("sinon");
const { url, getPosts, deletePostById } = require("../api");

describe("API test", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const expected = [
    {
      userId: 1,
      id: 1,
      title: "title one",
      body: "body one",
    },
    {
      userId: 1,
      id: 2,
      title: "title two",
      body: "body two",
    },
    {
      userId: 1,
      id: 3,
      title: "title three",
      body: "body three",
    },
  ];

  it("should return the posts", (done) => {
    moxios.stubRequest(url("posts"), {
      status: 200,
      response: expected,
    });

    let onFulfilled = Sinon.spy();
    getPosts().then(onFulfilled);

    moxios.wait(() => {
      const response = onFulfilled.getCall(0).args[0].data;
      expect(response).toEqual(expected);
      done();
    });
  });

  it("should delete the post", (done) => {

    const post = expected[0];

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
