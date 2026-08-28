import { Link } from "react-router-dom"

const categoryBadges = {
  frontend: "bg-blue-100 text-blue-700",
  backend: "bg-purple-100 text-purple-700",
  design: "bg-pink-100 text-pink-700",
  devops: "bg-orange-100 text-orange-700",
  mobile: "bg-emerald-100 text-emerald-700",
}

function CourseDetail({ course }) {
  const { title, description, category, level, lessons, instructor, price } = course

  const badge = categoryBadges[category] || "bg-gray-100 text-gray-700"

  const outcomes = [1, 2, 3, 4, 5, 6]
  const modules = [1, 2, 3, 4, 5]

  return (
    <div>
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            ← Quay lại danh sách
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badge}`}>
              {category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
              Published
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h1>

          <p className="mt-4 text-base text-gray-300 max-w-2xl">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <span>👤</span>
              {instructor}
            </p>
            <p className="flex items-center gap-2">
              <span>▤</span>
              {lessons} Lessons
            </p>
            <p className="flex items-center gap-2">
              <span>▮</span>
              {level}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">About This Course</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">What You'll Learn</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {outcomes.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-0.5 text-green-500">✓</span>
                  Comprehensive understanding of core concepts and advanced techniques.
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Course Content</h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white divide-y divide-gray-200 overflow-hidden">
              {modules.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <p className="flex items-center gap-3 text-sm font-medium text-gray-900">
                    <span className="text-blue-600">▷</span>
                    Module {item}: Introduction to Topic
                  </p>
                  <span className="text-xs text-gray-500">15:00</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="h-40 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600" />

            <div className="mt-5 flex items-center justify-between">
              <p className="text-3xl font-extrabold text-gray-900">${price}</p>
              <span className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-50 cursor-pointer transition-colors">
                🤍
              </span>
            </div>

            <button className="mt-5 w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Enroll Now
            </button>

            <button className="mt-3 w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Preview Course
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default CourseDetail
