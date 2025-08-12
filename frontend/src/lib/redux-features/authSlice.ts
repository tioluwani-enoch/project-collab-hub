import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
  password?: string; // don't store password in localStorage
  name?: string;
  email?: string;
  description?: string;
  tags?: string[];
  year?: string;
}

interface AuthState {
  status: "idle" | "loading" | "succeeded" | "failed";
  user: User | null;
  error: string | null;
}

interface LoginPayload {
  username: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

// Load user from localStorage on init
const storedUser = localStorage.getItem("user");
const initialState: AuthState = {
  status: "idle",
  user: storedUser ? JSON.parse(storedUser) : null,
  error: null,
};

// Login user
export const loginUser = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: ErrorResponse }
>("auth/loginUser", async (user, { rejectWithValue }) => {
  try {
    const { username, password } = user;
    const response = await axios.post<User>(
      "http://localhost:9999/api/v1/user/login",
      { username, password }
    );
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data as ErrorResponse);
  }
});

// Signup user
export const signupUser = createAsyncThunk<
  User,
  { rejectValue: ErrorResponse }
>("auth/signupUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:9999/api/v1/user/create",
      userData
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data as ErrorResponse);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message || action.error.message || "Unknown error";
      })
      // signup
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message || action.error.message || "Unknown error";
      });
  },
});

export const selectStatus = (state: { auth: AuthState }) => state.auth.status;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
