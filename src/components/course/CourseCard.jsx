import { Link } from "react-router-dom"

function CourseCard({ course }) {
  const { id, title, description, category, level, lessons, instructor, price } = course

  return (
    <div>
      <span>{category}</span>
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