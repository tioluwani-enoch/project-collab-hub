import { Link } from "react-router";
import Button from "../components/Button"; // adjust path as needed

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <header className="w-full px-6 py-4 shadow-md bg-white fixed top-0 z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-bold text-purple-700">CompileKnox</Link>
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
            I built this platform to make it easier for Computer Science
            students at Knox to work together — especially when it comes to
            homework and problem-solving.
          </p>
          <div className="flex justify-center">
            <Button text="Join the Community" styling="w-[200px]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Why I Built CompileKnox
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a fellow CS student, I know how tough it can be to stay on top of
            assignments — especially when you're stuck and just need a quick
            explanation. I built CompileKnox to give us a space where we can
            find each other, ask questions, and collaborate on coursework in a
            way that’s simple, respectful, and effective.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-purple-800 text-center mb-10">
            What You Can Do Here
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Homework Collaboration */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Collaborate on Homework
              </h4>
              <p className="text-sm text-gray-600">
                Post questions, share ideas, and work through problems together
                — especially when you're stuck on that one tough assignment.
              </p>
            </div>

            {/* Find Study Partners */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Find Project Partners
              </h4>
              <p className="text-sm text-gray-600">
                Team up with others who are taking the same classes or just want
                to help out and learn or build projects together.
              </p>
            </div>

            {/* Knowledge Level Tags */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                See Level of Experience
              </h4>
              <p className="text-sm text-gray-600">
                Quickly tell someone’s understanding level by tags like “CS 141”
                or “CS 142” — so you know who’s best to ask or who might need
                your help.
              </p>
            </div>

            {/* Events */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Discover Events
              </h4>
              <p className="text-sm text-gray-600">
                Stay up-to-date with tech events, coding nights, or hackathons
                on and off campus.
              </p>
            </div>

            {/* Resource Sharing */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Share Coding Resources
              </h4>
              <p className="text-sm text-gray-600">
                From cheat sheets to GitHub links — you can share tools that
                help others and learn from what’s already out there.
              </p>
            </div>

            {/* Build Your Profile */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-purple-700 mb-2">
                Show Off Your Work
              </h4>
              <p className="text-sm text-gray-600">
                Link your personal projects and contributions to show what
                you’ve built and what you’re passionate about.
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
            Got feedback, ideas, or just want to say hi? I’d love to hear from
            you.
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
            <a href="#" className="hover:text-purple-600">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
