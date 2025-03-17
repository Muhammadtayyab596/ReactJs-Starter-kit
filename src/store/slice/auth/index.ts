import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../../services/authServices";

export interface initialState {
  userData: any;
  isLoading: boolean;
}

const initialState: initialState = {
  userData: null,
  isLoading: false,
};

export const loginUser = createAsyncThunk(
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
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const {} = counterSlice.actions;

export default counterSlice.reducer;
