import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
 data: Array<{
    id: string,
    title: string,
    description: string
 }>,
}

const initialState: ListState = {
 data: []
} 

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListData: (state, action: PayloadAction<ListState["data"]>) => {
      state.data = action.payload;
    }
  },
})

export const { setListData } = listSlice.actions

export default listSlice.reducer