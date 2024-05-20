import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userId: string | undefined;
  cookie: string | undefined;
  role: string | undefined;
  activeAddress: string | undefined;
}

const initialState: UserState = {
  userId: undefined,
  cookie: undefined,
  role: undefined,
  activeAddress: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUserCookie: (state, action) => {
      state.cookie = action.payload;
    },
    setUserActiveAddress: (state, action) => {
      state.activeAddress = action.payload;
    },
  },
});

export const { setUser, setUserActiveAddress, setUserCookie, setRole } =
  userSlice.actions;

export default userSlice.reducer;
