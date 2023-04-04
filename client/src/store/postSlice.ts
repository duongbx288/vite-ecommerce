import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { client } from "../api/client";
interface PostState {
  list: any[]; // Change later
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null ;
}

const initialState: PostState = {
  list: [],
  status: "idle",
  error: null,
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
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.list = state.list.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { postAdded, postUpdate, reactionAdded } = postSlice.actions;

export default postSlice.reducer;

// Custom selectors functions
// the 'state' in these function IS the root Redux state object (store.ts)
export const selectAllPosts = (state) => state.post.list;
export const selectPostById = (state, postId) =>
  state.post.list.find((post) => post.id === postId);

// createAsyncThunk() takes 2 arguments:
// + a string used as prefix for generated action types
// + a 'payload creator' callback function that should
//   return a Promise containing data, or error
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});
