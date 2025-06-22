import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";

const posts = [
  {
    id: 1,
    title: "How does React reconcile the virtual DOM with the real DOM?",
    author: "johndoe",
    votes: 10,
    answers: 3,
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "What's the difference between useEffect and useLayoutEffect?",
    author: "janedoe",
    votes: 7,
    answers: 2,
    date: "1 day ago",
  },
];

export default function AllPosts() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800">All Posts</h1>
          <LinkButton text="Add Post" link="/add-post" />
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              key={post.id}
              className="block bg-white rounded-xl shadow hover:shadow-md transition p-5 border border-gray-200"
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                by <span className="font-medium">{post.author}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex gap-4">
                <span>⬆️ {post.votes} votes</span>
                <span>💬 {post.answers} answers</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
