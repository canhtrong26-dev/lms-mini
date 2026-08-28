import { Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div>
      <aside>
        <p>Sidebar</p>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout