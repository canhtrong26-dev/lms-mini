import { Outlet, NavLink, Link } from "react-router-dom"

function DashboardLayout() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
      ? "bg-blue-50 text-blue-600"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
    }`

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-base">
                  🎓
                </span>
                <span className="text-lg font-bold text-gray-900">EduPro</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/courses" className="text-sm font-medium text-gray-600 hover:text-gray-900">Courses</Link>
                <Link to="/favorites" className="text-sm font-medium text-gray-600 hover:text-gray-900">Favorites</Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600">
                <span>▦</span>
                <span>Dashboard</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden md:flex w-64 shrink-0 flex-col bg-white border-r border-gray-200 p-4">
          <p className="px-3 mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            MENU
          </p>

          <div className="space-y-1">
            <NavLink to="/dashboard" end className={menuClass}>
              <span>▦</span>
              <span>Overview</span>
            </NavLink>

            <NavLink to="/dashboard/my-courses" className={menuClass}>
              <span>▤</span>
              <span>My Courses</span>
            </NavLink>
          </div>
        </aside>

        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
