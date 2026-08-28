import { Outlet, Link } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default MainLayout