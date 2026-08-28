import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (email && password.length >= 6) {
      login(email)
      navigate("/dashboard")
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="text-center">
          <span className="inline-flex w-12 h-12 rounded-xl bg-blue-600 text-white items-center justify-center text-xl">
            🎓
          </span>
          <h1 className="mt-5 text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to access your courses and dashboard
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <label className="block mt-5 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Remember me
            </label>

            <span className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            onClick={handleLogin}
            disabled={!email || password.length < 6}
            className={`w-full py-2 rounded-lg text-white font-medium
               ${!email || password.length < 6
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
              }`}
          >
            Sign in
          </button>

          <div className="mt-6 pt-5 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">Don't have an account?</p>
            <Link
              to="/login"
              className="mt-1 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Create a free account
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Demo credentials: Any valid email and password (min 6 chars)
        </p>

      </div>
    </div>
  )
}

export default LoginPage
