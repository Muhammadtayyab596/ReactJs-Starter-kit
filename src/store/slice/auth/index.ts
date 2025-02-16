import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../../services/authServices";

export interface initialState {
  userDat: any;
  isLoading: boolean;
}

const initialState: initialState = {
  userDat: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }) => {
    try {
      const response = await loginRequest(credentials);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userDat = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const {} = counterSlice.actions;

export default counterSlice.reducer;
