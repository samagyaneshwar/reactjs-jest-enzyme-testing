import moxios from "moxios";
import { deletePost, fetchPosts } from "../../redux/slices/postsSlice";
import { store } from "../../redux/store";

describe.only("Posts redux", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should update the posts correctly", async () => {
    const expectedState = [
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

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    await store.dispatch(fetchPosts());
    const { posts } = store.getState();
    expect(posts.posts).toEqual(expectedState);
  });

  it("should delete the post", async () => {
    const payload = [
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

    const expectedState = [
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
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload,
      });
    });

    await store.dispatch(fetchPosts());
    await store.dispatch(deletePost({ id: 3 }));
    const { posts } = store.getState();

    expect(posts.posts).toEqual(expectedState);
  });
});
