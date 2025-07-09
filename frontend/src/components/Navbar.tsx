import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-purple-700">
            CompileKnox
          </Link>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <HashLink smooth to="/" className="hover:text-purple-600">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="hover:text-purple-600">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#features" className="hover:text-purple-600">
                Features
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:text-purple-600">
                Contact
              </HashLink>
            </li>
            <li>
              <Link to="/login" className="hover:text-purple-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-purple-600">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
