import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';
import {
  createUser,
  getInformation,
  logOutUser,
  loginUser,
  token,
} from 'services/authApi';

const handlePanding = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const handleIsLogin = state => state.isLoggedIn;
const handleUserName = state => state.user?.name;
const handleIsRefreshing = state => state.isRefreshing;

const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
  error: '',
  isLoading: false,
  isRefreshing: false,
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: creator => ({
    createUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
        console.log('body :>> ', body);
        try {
          const data = await createUser(body);
          token.set(data.token);
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: (state, { payload }) => {
          state.isLoading = false;
          state.user = payload.user;
          state.isLoggedIn = true;
          state.token = payload.token;
        },
        rejected: handleRejected,
      }
    ),

    loginUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
        try {
          const data = await loginUser(body);
          token.set(data.token);
          return data;
        } catch (error) {
          console.log('error :>> ', error);
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: (state, { payload }) => {
          state.isLoading = false;
          state.user = payload.user;
          state.isLoggedIn = true;
          state.token = payload.token;
        },
        rejected: handleRejected,
      }
    ),

    logOutUserAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const data = await logOutUser();
          token.unset();
          return data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: state => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.user = null;
          state.token = '';
        },
        rejected: handleRejected,
      }
    ),

    getInformationAction: creator.asyncThunk(
      async (_, { getState, rejectWithValue }) => {
        const persistedToken = getState().auth.token;
        if (!persistedToken) {
          return rejectWithValue('No token provided');
        }
        token.set(persistedToken);
        try {
          return await getInformation();
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: state => {
          state.isLoading = true;
          state.isRefreshing = true;
          state.error = '';
        },
        fulfilled: (state, { payload }) => {
          state.isLoading = false;
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        },
        rejected: (state, { payload }) => {
          state.error = payload;
          state.isRefreshing = false;
          state.isLoading = false;
        },
      }
    ),
  }),
  selectors: {
    selectIsLogin: handleIsLogin,
    selectUserName: handleUserName,
    selectIsRefreshing: handleIsRefreshing,
  },
});

export const authReducer = authSlice.reducer;
export const {
  createUserAction,
  logOutUserAction,
  loginUserAction,
  getInformationAction,
} = authSlice.actions;
export const { selectIsLogin, selectIsRefreshing, selectUserName } =
  authSlice.selectors;
