import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ViewPost from "./pages/ViewPost";
import AllPosts from "./pages/AllPosts";
import Error404 from "./pages/Error404";
import AddPosts from "./pages/AddPosts";

function App() {
  return (
    <>
      {/* Toast Notification System */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:id" element={<ViewPost />} />
          <Route path="/add-post" element={<AddPosts />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
