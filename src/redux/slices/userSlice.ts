import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  profilePicture: string | null;
  linkedinId: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  firstName: null,
  lastName: null,
  email: null,
  profilePicture: null,
  linkedinId: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Omit<UserState, "isLoggedIn">>) => {
      return {
        ...action.payload,
        isLoggedIn: true,
      };
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
