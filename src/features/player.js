import { createSlice } from "@reduxjs/toolkit"

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        value: {
            player: null,
            weapon: null,
            potion: null
        }
    },
    reducers: {
        setPlayer: (state, action) => {
            state.value.player = action.payload
        },
        minusGold: (state, action) => {
            state.value.player.gold = state.value.player.gold - action.payload
        },
        plusGold: (state, action) => {
            state.value.player.gold = state.value.player.gold + action.payload
        },
        setWeapon: (state, action) => {
            state.value.weapon = action.payload
        },
        Health: (state, action) => {
            state.value.player.health += action.payload;
        },
        Energy: (state, action) => {
            state.value.player.energy += action.payload;
        },
        Stamina: (state, action) => {
            state.value.player.stamina += action.payload;
        },
        Strength: (state, action) => {
            state.value.player.strength += action.payload;
        },
        InventorySlots: (state, action) => {
            state.value.player.inventorySlots += action.payload;
        },
        Damage: (state, action) => {
            state.value.player.damage += action.payload;
        },
        Health1: (state, action) => {
            state.value.player.health -= action.payload;
        },
        Energy1: (state, action) => {
            state.value.player.energy -= action.payload;
        },
        Stamina1: (state, action) => {
            state.value.player.stamina -= action.payload;
        },
        Strength1: (state, action) => {
            state.value.player.strength -= action.payload;
        },
        InventorySlots1: (state, action) => {
            state.value.player.inventorySlots -= action.payload;
        },
        Damage1: (state, action) => {
            state.value.player.damage += action.payload;
        },
        setDrink: (state, action) => {
            state.value.potion = action.payload;
        }
    }
})

export const { setPlayer, minusGold, plusGold, setWeapon, Stats, Damage, Energy, Health, InventorySlots, Stamina, Strength, Health1, Strength1, Stamina1, InventorySlots1, Energy1, Damage1, setDrink } = playerSlice.actions;

export default playerSlice.reducer;