import {
  asyncThunkCreator,
  buildCreateSlice,
  createSelector,
} from '@reduxjs/toolkit';
import { createUser, logOutUser, loginUser, token } from 'services/authApi';

const handlePanding = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleRejected = (state, { payload }) => {
  state.contacts.error = payload;
  state.contacts.isLoading = false;
};

const handleItems = state => state.contacts.items;
const handleIsLoading = state => state.contacts.isLoading;
const handleError = state => state.contacts.error;
const handleFilter = state => state.filter;

const initialState = {
  isLoggedIn: false,
  user: null,
  token: '',
  error: '',
  isLoading: false,
  isRefreshing: false,
};
// reducer - это функция, которая принимает текущее состояние (state)

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: creator => ({
    setFilterAction: creator.reducer((state, { payload }) => {
      state.filter = payload;
    }),

    createUserAction: creator.asyncThunk(
      async (body, { rejectWithValue }) => {
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
  }),
  selectors: {
    selectFilter: handleFilter,
    selectContacts: handleItems,
    selectIsLoading: handleIsLoading,
    selectError: handleError,
    selectFilteredContacts: createSelector(
      [handleItems, handleFilter],
      (contacts, filter) => {
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter)
        );
      }
    ),
  },
});

export const phonebookReducer = authSlice.reducer;
export const {
  setFilterAction,
  getContactsAction,
  deleteContactAction,
  addContactAction,
} = authSlice.actions;
export const {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectFilter,
} = authSlice.selectors;
