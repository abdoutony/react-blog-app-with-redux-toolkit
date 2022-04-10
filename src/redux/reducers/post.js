import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    title: "",
  },
  reducers: {
    fetchPosts: (state, { payload }) => {
      state.posts = payload;
    },
    fetchOnePost: (state, { payload }) => {
      state.post = payload;
    },
    fetchTitle: (state, { payload }) => {
      state.title = payload;
    },
  },
});
export const { fetchPosts, fetchOnePost, fetchTitle } = postSlice.actions;

export default postSlice.reducer;
