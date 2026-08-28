import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadCourses } from "../store/coursesThunk"
import CourseCard from "../components/course/CourseCard"

function CoursesPage() {
  const dispatch = useDispatch()
  const { list, loading, error } = useSelector((state) => state.courses)

  useEffect(() => {
    dispatch(loadCourses())
  }, [])

  if (loading) return <p>Đang tải...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Explore Courses</h1>
      <div>
        {list.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage