import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  name: string;
  visible: boolean;
}

const initialState: ProfileState = {
  name: 'Max',
  visible: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile(state, action) {
      if (action.payload) {
        state.visible = false;
      } else {
        state.visible = true;
      }
    },
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;

export default profileSlice.reducer;
