import { createSlice } from "@reduxjs/toolkit"

export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        value: []
    },
    reducers: {
        setItems: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeItem: (state, action) => {
            state.value = state.value.filter (x => x.image !== action.payload)
        },
      
        removeSoldItem: (state, action) => {
            const deleteIndex = action.payload;
            const result = state.value.filter((x, index) => index !== deleteIndex);
            state.value = result;
        }, 
         removeItemPotion: (state, action) => {
            state.value = state.value.filter ((x, index) => index !== action.payload)
        }
    }
})

export const { setItems, removeItem, removeSoldItem, removeItemPotion } = itemsSlice.actions;

export default itemsSlice.reducer;