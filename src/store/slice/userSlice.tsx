import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userId: string | undefined;
  cookie: string | undefined;
  activeAddress: string | undefined;
}

const initialState: UserState = {
  userId: undefined,
  cookie: undefined,
  activeAddress: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setUserCookie: (state, action) => {
      state.cookie = action.payload;
    },
    setUserActiveAddress: (state, action) => {
      state.activeAddress = action.payload;
    },
  },
});

export const { setUser, setUserActiveAddress, setUserCookie } =
  userSlice.actions;

export default userSlice.reducer;
