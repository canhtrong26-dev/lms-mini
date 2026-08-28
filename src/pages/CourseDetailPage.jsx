import { Link, useParams } from "react-router-dom"
import courses from "../data/courses"
import CourseDetail from "../components/course/CourseDetail"


function CourseDetailPage() {
  const { id } = useParams()

  const course = courses.find((item) => item.id === Number(id))

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <span className="inline-flex w-16 h-16 rounded-full bg-gray-100 items-center justify-center text-2xl">
          🔍
        </span>
        <h2 className="mt-5 text-2xl font-bold text-gray-900">Không tìm thấy khóa học này!</h2>
        <p className="mt-2 text-sm text-gray-500">
          Khóa học bạn tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.
        </p>

        <Link
          to="/courses"
          className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Về danh sách khóa học
        </Link>
      </div>
    )
  }

  return <CourseDetail course={course} />
}

export default CourseDetailPage
