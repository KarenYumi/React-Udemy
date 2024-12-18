import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 , showCounter: true },
  reducers: {
    increment(state) {
      state.counter += 1; // ou state.counter++
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

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;
export const { login, logout} = authSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, auth: authSlice.reducer
  },
});

export default store;
