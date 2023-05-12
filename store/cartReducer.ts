import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  products: Array<{
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    imageUrl?: string;
  }>;
};

const initialState = {
  products: []
} as CounterState;

export const counter = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload)
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // decrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value -= action.payload;
    // },
  },
});

export const {
  // increment,
  // incrementByAmount,
  // decrement,
  // decrementByAmount,
  addProduct,
  reset,
} = counter.actions;
export default counter.reducer;