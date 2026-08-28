import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
            <span>✦</span>
            New courses available
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Unlock Your Potential with{" "}
            <span className="text-blue-600">Expert-Led</span> Courses
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Master the latest skills in coding, design, and business. Learn from
            industry experts and take your career to the next level.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Courses
              <span>→</span>
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Lifetime Access
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Expert Instructors
            </p>
            <p className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Certificate of Completion
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div>
              <span className="inline-flex w-11 h-11 rounded-xl bg-blue-500/20 text-blue-300 items-center justify-center text-lg">
                👥
              </span>
              <p className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">10k+</p>
              <p className="mt-1 text-sm text-gray-400">Active Students</p>
            </div>

            <div>
              <span className="inline-flex w-11 h-11 rounded-xl bg-purple-500/20 text-purple-300 items-center justify-center text-lg">
                🏅
              </span>
              <p className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">120+</p>
              <p className="mt-1 text-sm text-gray-400">Expert Instructors</p>
            </div>

            <div>
              <span className="inline-flex w-11 h-11 rounded-xl bg-green-500/20 text-green-300 items-center justify-center text-lg">
                ⚡
              </span>
              <p className="mt-4 text-3xl sm:text-4xl font-extrabold text-white">500+</p>
              <p className="mt-1 text-sm text-gray-400">High-Quality Courses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-blue-600 px-6 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to start learning?</h2>
          <p className="mt-3 text-sm sm:text-base text-blue-100">
            Join thousands of students and start your journey to success today.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started for Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
