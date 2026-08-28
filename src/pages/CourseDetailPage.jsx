import { useParams } from "react-router-dom"
import courses from "../data/courses"
import CourseDetail from "../components/course/CourseDetail"


function CourseDetailPage() {
  const { id } = useParams()

  const course = courses.find((item) => item.id === Number(id))

  console.log("id từ URL:", id)
  console.log("course tìm được:", course) 

  if (!course) {
    return <h2>Không tìm thấy khóa học này!</h2>
  }

  return <CourseDetail course={course} />
}

export default CourseDetailPage