import { createSlice } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
  },
  reducers: userActions
});

export const { changeUser, logout } = userSlice.actions;
