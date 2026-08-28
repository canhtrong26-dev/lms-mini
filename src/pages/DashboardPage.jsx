import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import courses from "../data/courses"

function DashboardPage() {
  const { user } = useAuth()

  const totalCourses = courses.length
  const completedCourses = 2

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Welcome back, {user?.name}!
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Here's what's happening with your learning journey today.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Enrolled Courses</p>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">{totalCourses}</p>
          </div>
          <span className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg">
            ▤
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Hours Learned</p>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">26</p>
          </div>
          <span className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg">
            ◷
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">{completedCourses}</p>
          </div>
          <span className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg">
            🏅
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">92%</p>
          </div>
          <span className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg">
            ↗
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Continue Learning</h2>
            <Link
              to="/dashboard/my-courses"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 space-y-5">
            <div className="flex items-center gap-4">
              <span className="w-20 h-14 shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Complete React Developer Course 2024
                </p>
                <p className="mt-0.5 text-xs text-gray-500">Module 3: Advanced Concepts</p>

                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>65% Complete</span>
                  <span>4h 20m left</span>
                </div>

                <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                  <span className="block h-full w-[65%] rounded-full bg-blue-600" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-20 h-14 shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Advanced Node.js &amp; Microservices
                </p>
                <p className="mt-0.5 text-xs text-gray-500">Module 4: Advanced Concepts</p>

                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>32% Complete</span>
                  <span>8h 15m left</span>
                </div>

                <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                  <span className="block h-full w-[32%] rounded-full bg-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
            <Link
              to="/courses"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Browse
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-bold text-gray-900">UI/UX Design Masterclass</p>
              <p className="mt-1 text-xs text-gray-600">
                Expand your skillset with design principles.
              </p>
              <Link
                to="/courses/3"
                className="mt-3 inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Course
              </Link>
            </div>

            <div className="rounded-xl bg-purple-50 p-4">
              <p className="text-sm font-bold text-gray-900">GraphQL with Apollo Server</p>
              <p className="mt-1 text-xs text-gray-600">
                Perfect next step for your backend journey.
              </p>
              <Link
                to="/courses"
                className="mt-3 inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Course
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default DashboardPage
