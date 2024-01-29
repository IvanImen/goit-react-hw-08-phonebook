import {
  asyncThunkCreator,
  buildCreateSlice,
  createSelector,
} from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'services/contactsApi';

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
  contacts: {
    items: [],
    isLoading: false,
    error: '',
  },
  filter: '',
};
// reducer - это функция, которая принимает текущее состояние (state)

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: creator => ({
    setFilterAction: creator.reducer((state, { payload }) => {
      state.filter = payload;
    }),

    clearContactsAction: creator.reducer(state => {
      state.contacts.items = [];
      state.contacts.isLoading = false;
      state.contacts.error = '';
    }),

    getContactsAction: creator.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          return await getContacts();
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = payload;
        },
        rejected: handleRejected,
      }
    ),

    addContactAction: creator.asyncThunk(
      async (contact, { rejectWithValue }) => {
        try {
          return await addContact(contact);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items.push(payload);
        },
        rejected: handleRejected,
      }
    ),

    deleteContactAction: creator.asyncThunk(
      async (contact, { rejectWithValue }) => {
        try {
          return await deleteContact(contact);
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: handlePanding,
        fulfilled: (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.items = state.contacts.items.filter(
            contact => contact.id !== payload.id
          );
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

export const phonebookReducer = phonebookSlice.reducer;
export const {
  setFilterAction,
  getContactsAction,
  deleteContactAction,
  addContactAction,
  clearContactsAction,
} = phonebookSlice.actions;
export const {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
  selectFilter,
} = phonebookSlice.selectors;
