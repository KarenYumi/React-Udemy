import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
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
  },
});

export const { increment, decrement, increase } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
