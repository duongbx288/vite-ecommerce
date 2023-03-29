import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  itemList: any[]; // Change later
  user?: string;
  promotionCode?: string;
}

const initialState: CartState = {
  itemList: [
    {
      id: "1",
      name: "item 1",
      description: "this is the 1st item",
      quantity: 5,
      price: 15000,
    },
    {
      id: "2",
      name: "item 2",
      description: "this is the 2nd item",
      quantity: 3,
      price: 12000,
    },
  ],
  promotionCode: "",
};

// Mutating state should only be allowed in 'createSlice'
// Check docs for more info
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state);
    },
    removeFromCart(state, action) {
      console.log(state);
    },
    addPromotionCode(state, action) {
      console.log(state);
    },
    incrementItem(state, action) {
      // Should be changed for readability
      console.log("incre");
      const product = action.payload;
      if (product.id) {
        const existItem = state.itemList.find((item) => item.id === product.id);
        existItem.quantity += 1;
      }
    },
    decrementItem(state, action) {
      console.log("decre");
      const product = action.payload;
      if (!product.id) return;
      if (product.quantity > 0) {
        const existItem = state.itemList.find((item) => item.id === product.id);
        existItem.quantity == 1;
      } else
        state.itemList = state.itemList.filter((item) => {
          return item.id != product.id;
        });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addPromotionCode,
  incrementItem,
  decrementItem,
} = cartSlice.actions;

export default cartSlice.reducer;
