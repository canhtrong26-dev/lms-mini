import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import courses from "../data/courses"
import CourseCard from "../components/course/CourseCard"

function FavoritesPage() {
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds)

  const favoriteCourses = courses.filter((course) =>
    favoriteIds.includes(course.id)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Favorite Courses</h1>
      <p className="mt-1 text-sm text-gray-500">Courses you've saved for later.</p>

      {favoriteCourses.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white py-20 px-6 text-center">
          <span className="inline-flex w-16 h-16 rounded-full bg-gray-100 items-center justify-center text-2xl">
            🤍
          </span>
          <h3 className="mt-5 text-lg font-bold text-gray-900">No favorites yet</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
            You haven't added any courses to your favorites. Browse courses and
            click the heart icon to save them.
          </p>

          <Link
            to="/courses"
            className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
