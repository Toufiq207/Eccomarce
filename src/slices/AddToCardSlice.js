import { createSlice } from '@reduxjs/toolkit'


export const AddToCardSlice = createSlice({
  name: 'cart',
  initialState: {
    value:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
  addToCard: (state,action) => {

// console.log(action.payload);

 
// state.value.push(action.payload)


let alldata=state.value.find(item=>item.title===action.payload.title)
if(alldata){
  alldata.quantity+=1
}else{
state.value.push({...action.payload,quantity: 1})
}


localStorage.setItem("cart",JSON.stringify(state.value))
      
    },
   
   incre: (state,action) =>{
  state.value.map(item=>{
    // item.quantity+=action.payload
    // console.log(item.title);
    // console.log(action.payload.title);
    if(item.title==action.payload.title){
      item.quantity+=1
    }
   
  })
    
     localStorage.setItem("cart",JSON.stringify(state.value))
   },
   decre:(state,action)=>{
   state.value.map(item=>{
     if(item.title==action.payload.title){
     if(item.quantity>1){
       item.quantity-=1
     }
     
     }
   })
    localStorage.setItem("cart",JSON.stringify(state.value))
   },
   remove:(state,action)=>{
   state.value.map((item,index)=>{
     if(item.title==action.payload.title){
   state.value.splice(index,1)
    
     }
   })
    localStorage.setItem("cart",JSON.stringify(state.value))
   },
    
    
  },
})


   
export const {   addToCard,incre,decre,remove} =AddToCardSlice.actions

export default AddToCardSlice.reducer