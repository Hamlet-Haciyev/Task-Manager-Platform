import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    signup: (state, action) => {
      state.user = JSON.parse(localStorage.getItem("user")) ?? [];
      //Ilk once burda yoxlamisdim sonradan componentin ozunde yoxladim deye burani yoruma atdim.

      // const isSuccess = Object.values(action.payload).every(
      //   (item) => item !== ""
      // );
      state.user.push({ ...action.payload, id: state.user.length + 1 });
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const { signup } = user.actions;

export default user.reducer;
