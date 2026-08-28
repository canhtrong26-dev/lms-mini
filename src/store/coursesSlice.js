import { createSlice } from "@reduxjs/toolkit"

const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true
            state.error = null
        },
        setCourses: (state, action) => {
            state.list = action.payload
            state.loading = false
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
    },
})

export const { setLoading, setCourses, setError } = coursesSlice.actions
export default coursesSlice.reducer