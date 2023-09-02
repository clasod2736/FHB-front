import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: [
    {
      id: `${new Date().getSeconds()}`,
      description: "This is something",
      significance: 7,
    },
  ],
};

export const ListSlice = createSlice({
  name: "listReducers",
  initialState,
  reducers: {},
});

export const action = ListSlice.actions;
export default ListSlice.reducer;