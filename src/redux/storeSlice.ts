import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[]
}

export const counterSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addTocart: (state, action) => {
        // @ts-ignore
  
        const existProduct = state.cart.find(
           // @ts-ignore
          (item) => item.id === action.payload.id
        );
  
        if (existProduct) {
          // @ts-ignore
          existProduct.quentity += 1;
       
        } else {
          // @ts-ignore
          state.cart.push({ ...action.payload, quentity: 1 })
            
        }
      },

      incressQuantity:(state, action) =>{
        const existProduct = state.cart.find((item) => item.id === action.payload)

        if(existProduct){
          existProduct.quentity +=1
        }
      },
      decressQuantity:(state, action) =>{
        const existProduct = state.cart.find((item) => item.id === action.payload)

        if(existProduct){
          existProduct.quentity -=1
        }
      },

      deleteBtn:(state, action) =>{
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
  
 
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addTocart, incressQuantity, decressQuantity, deleteBtn } = counterSlice.actions

export default counterSlice.reducer