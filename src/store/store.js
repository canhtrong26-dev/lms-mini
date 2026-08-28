import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import favoritesReducer from "./favoritesSlice"
import coursesReducer from "./coursesSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        favorites: favoritesReducer,
        courses: coursesReducer,
    },
})

export default store