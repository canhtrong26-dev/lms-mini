import courses from "../data/courses"
import CourseCard from "../components/course/CourseCard"

function CoursesPage() {
  return (
    <div>
      <h1>Explore Courses</h1>

      <div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage