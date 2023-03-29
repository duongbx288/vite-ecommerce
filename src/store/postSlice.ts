import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  list: any[]; // Change later
}

const initialState: PostState = {
  list: [
    {
      id: "1",
      title: "First",
      content: "Hello. This is the first item of the list",
    },
    {
      id: "2",
      title: "Second",
      content: "Hi. This is the second item of the list",
    },
  ],
};

// Should not mutate state outside 'createSlide'
// Check docs for more info
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<{title: string, content: string}>) {
        state.list.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            content: content,
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
  },
});

export const { postAdded, postUpdate } = postSlice.actions;

export default postSlice.reducer;
