import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";

interface PostState {
  list: any[]; // Change later
}

const initialState: PostState = {
  list: [
    {
      id: "1",
      title: "First",
      content: "Hello. This is the first item of the list",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    },
    {
      id: "2",
      title: "Second",
      content: "Hi. This is the second item of the list",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    },
  ],
};

// Should not mutate state outside 'createSlide'
// Check docs for more info
// 'prepare callback' can take multiple arguments, run synchronous logic, etc.
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(
        state,
        action: PayloadAction<{
          title: string;
          content: string;
          userId?: string;
        }>
      ) {
        state.list.push(action.payload);
      },
      prepare(title: string, content: string, userId?: string) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
            user: userId,
            date: new Date().toISOString(),
          },
        };
      },
    },
    postUpdate(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.list.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.list.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions;

export default postSlice.reducer;

// Custom selectors functions
// the 'state' in these function IS the root Redux state object (store.ts)
export const selectAllPosts = (state) => state.post.list;
export const selectPostById = (state, postId) =>
  state.post.list.find((post) => post.id === postId);
