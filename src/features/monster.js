import { createSlice } from "@reduxjs/toolkit"

export const monsterSlice = createSlice({
    name: "monster",
    initialState: {
        value: null
    },
    reducers: {
        setMonster: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setMonster } = monsterSlice.actions;

export default monsterSlice.reducer;