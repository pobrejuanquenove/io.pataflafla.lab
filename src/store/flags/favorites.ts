import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimpleFlag } from '@/components';

interface FavoritesState {
  [key: string]: SimpleFlag;
}

const initialState: FavoritesState = {};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<SimpleFlag>) => {
      const { name } = action.payload;
      const { common } = name;

      // Redux toolkit allow to directly 'mutate' the state
      // underhood, it returns an object copy.
      if (!!state[common]) {
        delete state[common];
        return;
      }
      state[common] = action.payload;
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
