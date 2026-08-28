import { Outlet, Link } from "react-router-dom"

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        <div className="flex items-center gap-8">
                            <Link to="/" className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-base">
                                    🎓
                                </span>
                                <span className="text-lg font-bold text-gray-900">EduPro</span>
                            </Link>

                            <nav className="hidden sm:flex items-center gap-6">
                                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                                <Link to="/courses" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Courses</Link>
                                <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Dashboard</Link>
                            </nav>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                to="/login"
                                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </Link>
                        </div>

                    </div>

                    <nav className="flex sm:hidden items-center gap-6 pb-3">
                        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                        <Link to="/courses" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Courses</Link>
                        <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Dashboard</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-base">
                            🎓
                        </span>
                        <span className="text-base font-bold text-gray-900">EduPro</span>
                    </Link>

                    <p className="text-sm text-gray-500">
                        © 2026 EduPro LMS. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-gray-400">
                        <span className="hover:text-gray-600 cursor-pointer">⌘</span>
                        <span className="hover:text-gray-600 cursor-pointer">✦</span>
                        <span className="hover:text-gray-600 cursor-pointer">in</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainLayout
