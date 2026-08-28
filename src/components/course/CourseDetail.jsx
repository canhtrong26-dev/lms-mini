import { Link } from "react-router-dom"

function CourseDetail({ course }) {
  const { title, description, category, level, lessons, instructor, price } = course

  return (
    <div>
      <Link to="/courses">← Quay lại danh sách</Link>

      <span>{category}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{lessons} Lessons</p>
      <p>{level}</p>
      <p>{instructor}</p>
      <p>${price}</p>
    </div>
  )
}

export default CourseDetail