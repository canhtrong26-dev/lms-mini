import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteIds: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const id = action.payload
            const index = state.favoriteIds.indexOf(id)

            if (index === -1) {
                state.favoriteIds.push(id)
            } else {
                state.favoriteIds.splice(index, 1)
            }
        },
    },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer