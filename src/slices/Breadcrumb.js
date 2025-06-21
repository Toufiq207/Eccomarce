import { createSlice, current } from '@reduxjs/toolkit'

export const Breadcrumb = createSlice({
  name: 'bread',
  initialState: {
    daybefore: null,
    prvevalue: null,
    currentvalue: null
  },
  reducers: {
    activebutton: (state,action) => {
state.daybefore=state.prvevalue
state.prvevalue= state.currentvalue
state.currentvalue= action.payload
      
    },
    
    
    
    
  },
})


   
export const {  activebutton} = Breadcrumb.actions

export default Breadcrumb.reducer