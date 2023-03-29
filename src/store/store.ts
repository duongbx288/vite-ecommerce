import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import cartReducer from "./cartSlice";
// Create a store (with configureStore()) -> then slice (with createSlice({name: "....", initialState, reducers: {}}))
// export slice (sliceName.reducer) -> import to store

const store = configureStore({
  reducer: {
    post: postReducer,
    cart: cartReducer,
  },
});

// Need to create custom hooks for appDispatch, useSelector when using typescript
// --> reduxHooks.ts
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
