import { fetchCourses } from "../data/courseApi"
import { setLoading, setCourses, setError } from "./coursesSlice"

const loadCourses = () => async(dispatch) => {
    dispatch(setLoading())

    try {
        const data = await fetchCourses()
        dispatch(setCourses(data))
    } catch (error) {
        dispatch(setError("Không thể tải danh sách khóa học!"))
    }
}

export { loadCourses }