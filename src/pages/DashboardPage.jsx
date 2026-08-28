import { useAuth } from "../contexts/AuthContext"
import courses from "../data/courses"

function DashboardPage() {
  const { user } = useAuth()

  const totalCourses = courses.length
  const completedCourses = 2

  return (
    <div>
      <h1>Welcome back, {user?.name}!</h1>
      <p>Here's what's happening with your learning journey today.</p>

      <div>
        <div>
          <p>Enrolled Courses</p>
          <p>{totalCourses}</p>
        </div>

        <div>
          <p>Completed</p>
          <p>{completedCourses}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage