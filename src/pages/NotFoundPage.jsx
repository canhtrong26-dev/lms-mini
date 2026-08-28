import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl sm:text-8xl font-extrabold text-blue-600 tracking-tight">404</p>

      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">Page Not Found</h1>
      <p className="mt-3 text-sm text-gray-500 max-w-sm">
        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <span>←</span>
        Về trang chủ
      </Link>
    </div>
  )
}

export default NotFoundPage
