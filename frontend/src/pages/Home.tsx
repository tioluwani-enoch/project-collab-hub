import { Link } from "react-router";
import Button from "../components/Button"; // adjust path as needed

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-purple-700">
            CompileKnox
          </Link>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-purple-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-600">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-purple-600">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-600">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-purple-600">
                Login
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-purple-600">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Welcome to CompileKnox
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            A collaborative space for Knox College students to find project
            partners, share ideas, and build together. Whether you're looking to
            join a team or launch your own, CompileKnox helps you connect.
          </p>
          <div className="flex justify-center">
            <Button text="Start Collaborating" styling="w-[200px]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            What is CompileKnox?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            CompileKnox is a community hub for Knox College students to
            collaborate on coding, research, and creative projects. If you’ve
            got an idea or are looking to contribute to one, this is where
            you’ll find like-minded peers ready to build with you.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-purple-800 text-center mb-10">
            Features to Help You Collaborate
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Post Projects */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Post Project Ideas
              </h4>
              <p className="text-sm text-gray-600">
                Have an idea? Create a post with your vision, goals, and the
                type of help you’re looking for.
              </p>
            </div>

            {/* Join Teams */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Join Collaborations
              </h4>
              <p className="text-sm text-gray-600">
                Browse through ongoing projects and connect with people working
                on something you care about.
              </p>
            </div>

            {/* Tag by Skills */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Filter by Skills
              </h4>
              <p className="text-sm text-gray-600">
                Filter by tech stack (e.g. React, Python, SQL) or course tags
                (e.g. CS 141, DATA 200) to find a fit.
              </p>
            </div>

            {/* Showcase Work */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Share Your Progress
              </h4>
              <p className="text-sm text-gray-600">
                Let others see what you're working on. Great for feedback,
                motivation, and visibility!
              </p>
            </div>

            {/* Learn from Others */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Learn Together
              </h4>
              <p className="text-sm text-gray-600">
                Team up with students from other classes or backgrounds and
                expand your skillset while building.
              </p>
            </div>

            {/* Real Community */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Build Community
              </h4>
              <p className="text-sm text-gray-600">
                This isn’t just a tool — it’s a space for future coders,
                designers, and data scientists to grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Have a feature idea, bug report, or just want to say hi? Let’s
            connect!
          </p>
          <a
            href="mailto:teolubunmi@knox.edu"
            className="text-purple-600 hover:underline"
          >
            teolubunmi@knox.edu
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CompileKnox by Tioluwani Enoch.
            All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-purple-600">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-600">
              Terms
            </a>
            <a
              href="https://github.com/tioluwani-enoch"
              className="hover:text-purple-600"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
