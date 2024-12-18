import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 , showCounter: true },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    increase(state, action){
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter -= 1;
    },
    toggle(state) {
      state.counter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
