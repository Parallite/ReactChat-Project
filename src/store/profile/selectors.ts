import { RootState } from '..';

export const selectVisible = (state: RootState) => state.profile.visible;
export const selectName = (state: RootState) => state.profile.name;
