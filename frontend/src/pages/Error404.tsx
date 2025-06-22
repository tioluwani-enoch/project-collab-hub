import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 text-center px-6">
      {/* Fun Emoji Illustration */}
      <div className="text-7xl mb-4 animate-bounce">🤖❓</div>

      <h1 className="text-6xl font-bold text-purple-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        This page either doesn’t exist or got lost in the matrix.
      </p>

      {/* Helpful Links */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="text-purple-600 hover:underline font-medium">
          ⬅ Back to Home
        </Link>
        <Link
          to="/login"
          className="text-purple-600 hover:underline font-medium"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-purple-600 hover:underline font-medium"
        >
          Sign Up
        </Link>
        <Link
          to="/contact"
          className="text-purple-600 hover:underline font-medium"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
