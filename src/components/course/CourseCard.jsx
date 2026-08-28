import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../../store/favoritesSlice"

function CourseCard({ course }) {
  const { id, title, description, category, level, lessons, instructor, price } = course

  const dispatch = useDispatch()
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds)
  const isFavorite = favoriteIds.includes(id)

  return (
    <div>
      <span>{category}</span>
      <button onClick={() => dispatch(toggleFavorite(id))}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{lessons} Lessons</p>
      <p>{level}</p>
      <p>{instructor}</p>
      <p>${price}</p>
      <Link to={`/courses/${id}`}>Xem chi tiết</Link>
    </div>
  )
}

export default CourseCard