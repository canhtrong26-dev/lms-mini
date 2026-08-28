import { useSelector } from "react-redux"
import courses from "../data/courses"
import CourseCard from "../components/course/CourseCard"

function FavoritesPage() {
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds)

  const favoriteCourses = courses.filter((course) =>
    favoriteIds.includes(course.id)
  )

  return (
    <div>
      <h1>Favorite Courses</h1>

      {favoriteCourses.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div>
          {favoriteCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritesPage