import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../../store/favoritesSlice"

const categoryStyles = {
  frontend: { badge: "bg-blue-100 text-blue-700", thumb: "from-blue-500 to-indigo-600" },
  backend: { badge: "bg-purple-100 text-purple-700", thumb: "from-purple-500 to-fuchsia-600" },
  design: { badge: "bg-pink-100 text-pink-700", thumb: "from-pink-500 to-rose-600" },
  devops: { badge: "bg-orange-100 text-orange-700", thumb: "from-orange-500 to-amber-600" },
  mobile: { badge: "bg-emerald-100 text-emerald-700", thumb: "from-emerald-500 to-teal-600" },
}

function CourseCard({ course }) {
  const { id, title, description, category, level, lessons, instructor, price } = course

  const dispatch = useDispatch()
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds)
  const isFavorite = favoriteIds.includes(id)

  const style = categoryStyles[category] || {
    badge: "bg-gray-100 text-gray-700",
    thumb: "from-gray-600 to-gray-800",
  }

  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className={`relative h-40 bg-gradient-to-br ${style.thumb}`}>
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${style.badge}`}>
          {category}
        </span>

        <button
          onClick={() => dispatch(toggleFavorite(id))}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-base shadow-sm hover:bg-white hover:scale-110 transition-all"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <p className="flex items-center gap-1.5">
            <span>▤</span>
            {lessons} Lessons
          </p>
          <p className="flex items-center gap-1.5">
            <span>▮</span>
            {level}
          </p>
          <p className="flex items-center gap-1.5 basis-full">
            <span>🏷</span>
            <span className="capitalize">{category}</span>
          </p>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <p className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-semibold uppercase">
              {instructor?.charAt(0)}
            </span>
            {instructor}
          </p>
          <p className="text-lg font-bold text-blue-600">${price}</p>
        </div>

        <Link
          to={`/courses/${id}`}
          className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  )
}

export default CourseCard
