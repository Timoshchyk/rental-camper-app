import { createSlice } from "@reduxjs/toolkit";
import { getOffers, getOffersById } from "./operation";

const initialState = {
  allItem: [],
  item: [],
  error: false,
  loading: false,
  openModal: false,
};

const campsSlice = createSlice({
  name: "camps",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state, action) => {
        state.allItem = initialState.allItem;
        state.item = initialState.item;
        state.error = false;
        state.loading = true;
        state.openModal = false;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.allItem = action.payload;
        state.item = initialState.item;
        state.error = false;
        state.loading = false;
        state.openModal = false;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.allItem = initialState.allItem;
        state.item = initialState.item;
        state.error = true;
        state.loading = false;
        state.openModal = false;
      })
      .addCase(getOffersById.pending, (state, action) => {
        // state.item = state.allItem;
        state.error = false;
        state.loading = true;
        state.openModal = false;
      })
      .addCase(getOffersById.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.openModal = true;
        const foundItem = state.allItem.find(
          (item) => item.id === action.payload.id
        );
        // console.log(foundItem, "foundItem");

        // state.item = foundItem || [];

        state.item = [action.payload];

        // state.item.push(action.payload);

        // console.log("item", state.item);
      })
      .addCase(getOffersById.rejected, (state, action) => {
        state.item = initialState.item;
        state.error = true;
        state.loading = false;
        state.openModal = false;
      });
  },
});

export const campsReducer = campsSlice.reducer;