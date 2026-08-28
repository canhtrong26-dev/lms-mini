import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import favoritesReducer from "./favoritesSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        favorites: favoritesReducer,
    },
})

export default store