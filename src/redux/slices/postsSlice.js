import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../api";

export const postsInitialState = {
  posts: [],
  error: null,
  loading: false
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const res = await getPosts();
    return res.data;
  } catch (error) {
    return error.toString();
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: postsInitialState,
  reducers: {
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
        state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
        state.posts = action.payload;
        state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    }
  }
});

export const { setPosts, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
