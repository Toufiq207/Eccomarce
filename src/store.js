import { configureStore } from '@reduxjs/toolkit'
import  CounterSlice  from './slices/CounterSlice'
import  Breadcrumb  from './slices/Breadcrumb'
import  CatagorySlice  from './slices/CatagorySlice'
import  AddToCardSlice  from './slices/AddToCardSlice'


export default configureStore({
  reducer: {
    counter:CounterSlice,
    bread:Breadcrumb,
   catagory:CatagorySlice,
addToCard:AddToCardSlice
  },
})