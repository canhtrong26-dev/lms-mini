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

  if (loading) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center">
      <span className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
      <p className="mt-4 text-sm text-gray-500">Đang tải...</p>
    </div>
  )

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md mx-auto rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <span className="text-3xl">⚠️</span>
        <p className="mt-3 text-sm font-medium text-red-700">{error}</p>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Explore Courses</h1>
          <p className="mt-1 text-sm text-gray-500">Discover new skills and advance your career path</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <span className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-400">
            <span>🔍</span>
            Search courses...
          </span>

          <span className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">
            <span>⚟</span>
            All Categories
          </span>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white py-20 text-center">
          <span className="inline-flex w-14 h-14 rounded-full bg-gray-100 items-center justify-center text-2xl">
            📚
          </span>
          <h3 className="mt-4 text-lg font-bold text-gray-900">Chưa có khóa học nào</h3>
          <p className="mt-1 text-sm text-gray-500">Danh sách khóa học hiện đang trống.</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CoursesPage
