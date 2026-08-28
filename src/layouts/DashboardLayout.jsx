import { Outlet, NavLink } from "react-router-dom"

function DashboardLayout() {
  return (
    <div>
      <aside>
        <p>MENU</p>

        <NavLink
          to="/dashboard"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          Overview
        </NavLink>

        <NavLink
          to="/dashboard/my-courses"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          My Courses
        </NavLink>

      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout