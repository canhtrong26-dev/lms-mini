import courses from "../data/courses"
import CourseCard from "../components/course/CourseCard"

function MyCoursesPage() {
  const enrolled = courses.slice(0, 4)

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Courses</h1>
      <p className="mt-1 text-sm text-gray-500">Manage and continue your enrolled courses.</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {enrolled.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default MyCoursesPage
