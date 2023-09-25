import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    products : []
}


export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
      increment: (state) =>  {
       state.value += 1
      },
      addProduct: (state, {paylaod}) => {
        state.products.push(paylaod)
      }
    }
})

export const {increment, addProduct} = counterSlice.actions

export default counterSlice.reducer