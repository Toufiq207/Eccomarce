import { createSlice } from '@reduxjs/toolkit'


export const AddToCardSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
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
    
    
   },
   decre:(state,action)=>{
   state.value.map(item=>{
     if(item.title==action.payload.title){
     if(item.quantity>1){
       item.quantity-=1
     }
     
     }
   })
   }
    
    
  },
})


   
export const {   addToCard,incre,decre} =AddToCardSlice.actions

export default AddToCardSlice.reducer