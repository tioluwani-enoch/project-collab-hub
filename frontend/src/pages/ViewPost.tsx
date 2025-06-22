import { useParams } from "react-router-dom";
import { useState } from "react";

// Dummy data (you can replace with an API or context later)
const postList = [
  {
    id: 1,
    title: "How does React reconcile the virtual DOM with the real DOM?",
    author: "johndoe",
    content: [
      "I'm trying to understand how React updates the DOM efficiently. I know it uses a virtual DOM, but how exactly does it know what to update and what not to?",
      "Can someone explain how the diffing algorithm works under the hood?",
    ],
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "What's the difference between useEffect and useLayoutEffect?",
    author: "janedoe",
    content: [
      "I've read the docs, but I'm still confused. When should I use one over the other?",
      "Is there a performance difference? Does it affect rendering?",
    ],
    date: "1 day ago",
  },
];

export default function ViewPost() {
  const { id } = useParams();
  const postId = parseInt(id || "0", 10);
  const post = postList.find((p) => p.id === postId);

  const [comments, setComments] = useState([
    { id: 1, text: "This is helpful!", votes: 2 },
    { id: 2, text: "I think there's a better solution.", votes: -1 },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleVote = (id: number, delta: number) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, votes: c.votes + delta } : c))
    );
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: newComment,
          votes: 0,
        },
      ]);
      setNewComment("");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Question Title */}
        <h1 className="text-2xl font-bold text-purple-800 mb-2">{post.title}</h1>

        {/* Meta info */}
        <div className="text-sm text-gray-500 mb-6">
          <span>
            Asked {post.date} · by{" "}
            <span className="font-medium text-gray-700">{post.author}</span>
          </span>
        </div>

        {/* Post Content */}
        <div className="prose prose-sm max-w-none text-gray-800 mb-8">
          {post.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-purple-700 mb-4">
            Comments
          </h2>

          {/* List of comments */}
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="border border-gray-200 p-4 rounded-md bg-gray-50 flex justify-between items-start"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{comment.text}</p>
                </div>
                <div className="ml-4 flex flex-col items-center text-sm text-gray-600">
                  <button
                    onClick={() => handleVote(comment.id, 1)}
                    className="hover:text-purple-600"
                  >
                    ▲
                  </button>
                  <span className="font-medium">{comment.votes}</span>
                  <button
                    onClick={() => handleVote(comment.id, -1)}
                    className="hover:text-purple-600"
                  >
                    ▼
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Add comment form */}
          <div className="mt-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              rows={3}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
