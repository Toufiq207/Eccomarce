import { createSlice } from '@reduxjs/toolkit'

export const CatagorySlice = createSlice({
  name: 'catagory',
  initialState: {
    value: false,
  },
  reducers: {
   catagoryFuntion: (state,action) => {
 state.value=action.payload

 
 
      
    },
    
   
    
    
  },
})


   
export const { catagoryFuntion } =CatagorySlice.actions

export default CatagorySlice.reducer