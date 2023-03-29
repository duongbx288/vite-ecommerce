import { createSlice } from "@reduxjs/toolkit";

interface PostState {
  list: [];
}

const initialState = {
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
    postAdded(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
