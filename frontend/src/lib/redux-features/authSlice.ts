import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
  password: string;
}

// interface FetchUserDetails {
//   username: string;
//   first_name: string;
//   last_name: string;
//   role: string;
//   groups: string[];
// }

interface AuthState {
  status: "idle" | "loading" | "succeeded" | "failed";
  user: User | null;
//   userDetails: FetchUserDetails | null;
  error: string | null;
}

interface LoginPayload {
  username: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const initialState: AuthState = {
  status: "idle",
  user: null,
//   userDetails: null,
  error: null,
};

// Login user action
export const loginUser = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: ErrorResponse }
>("auth/loginUser", async (user, { rejectWithValue }) => {
  try {
    const { username, password } = user;
    const response = await axios.post<User>(
      "http://localhost:9999/api/v1/user/login",
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data as ErrorResponse);
  }
});

// Fetch user info action
// export const fetchUserInfo = createAsyncThunk<
//   FetchUserDetails,
//   void,
//   { rejectValue: ErrorResponse }
// >("auth/fetchUserInfo", async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.post<FetchUserDetails>(
//       "/common/api/get_user_info/"
//     );
//     return response.data;
//   } catch (error: any) {
//     return rejectWithValue(error.response?.data as ErrorResponse);
//   }
// });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    //   state.userDetails = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload
          ? action.payload.message
          : action.error.message || "Unknown error";
      })
      // Fetch user info
//       .addCase(fetchUserInfo.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchUserInfo.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.userDetails = action.payload; // Store fetched user details
//       })
//       .addCase(fetchUserInfo.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload
//           ? action.payload.message
//           : action.error.message || "Unknown error";
//       });
  },
});

export const selectStatus = (state: { auth: AuthState }) => state.auth.status;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
// export const selectUserDetails = (state: { auth: AuthState }) =>
//   state.auth.userDetails;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
