import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  userId: string | undefined,
  name: string | undefined,
  email: string | undefined,
  image: string | undefined,
  surname: string | undefined,
}

const initialState: ProfileState = {
  userId: undefined,
  name: 'Your name',
  email: 'Your email',
  image: undefined,
  surname: 'Your surname',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ProfileState>) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
      state.image = action.payload.image;
    }
  },
})

export const { setUserData } = profileSlice.actions

export default profileSlice.reducer