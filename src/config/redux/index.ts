import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../../modules/profile/redux';
import listReducer from '../../modules/list/redux';

export const store = configureStore({
  reducer: {
      profile: profileReducer,
      list: listReducer,
  },
})

