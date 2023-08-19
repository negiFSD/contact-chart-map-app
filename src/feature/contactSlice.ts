import { contactDetailType, contactSliceType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: contactSliceType = {
  contactList: [],
};

// This slice is used to handle contact CRUD operations
export const contatSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: { payload: contactDetailType }) => {
      state.contactList.push(action.payload);
    },
    deleteContact: (state, action: { payload: string }) => {
      state.contactList = state.contactList.filter(
        (item) => item.id !== action.payload
      );
    },
    updateContact: (state, action: { payload: contactDetailType }) => {
      const item = state.contactList.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.firstName = action.payload.firstName;
        item.id = action.payload.id;
        item.lastName = action.payload.lastName;
        item.status = action.payload.status;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } = contatSlice.actions;
export default contatSlice.reducer;
