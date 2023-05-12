import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  products: Array<{
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    imageUrl?: string;
    quantity: number;
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
      // add with quantity
      const product = state.products.find(product => product.id === action.payload.id)
      if (product) {
        product.quantity += 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 })
      }
    },
    removeProduct: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id)
    },
    addQuantity: (state, action: PayloadAction<any>) => {
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.quantity += 1
        }
        return product
      })
    },
    removeQuantity: (state, action: PayloadAction<any>) => {
      state.products = state.products.map(product => {
        if (product.id === action.payload.id) {
          product.quantity -= 1
        }
        return product
      })
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
  removeProduct,
  addQuantity,
  removeQuantity,
  reset,
} = counter.actions;
export default counter.reducer;