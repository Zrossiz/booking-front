import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IOffer } from "../../types/offer";

export interface CitiesState {
  places: IOffer[];
  cities: string[];
  filters: string[];
}

const initialState: CitiesState = {
  places: [],
  cities: [
    "Paris",
    "Cologne",
    "Brussels",
    "Amsterdam",
    "Hamburg",
    "Dusseldorf",
  ],
  filters: [
    "Popular",
    "Price: low to high",
    "Price: high to low",
    "Top rated first",
  ],
};

const citesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    getPlaces: (state, action: PayloadAction<IOffer[]>) => {
      state.places = action.payload;
    },
  },
});

export const { getPlaces } = citesSlice.actions;
export default citesSlice.reducer;
