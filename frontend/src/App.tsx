import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
// import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import AddProject from "./pages/AddProject";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewProjects from "./pages/ViewProjects";

function App() {
  return (
    <>
      {/* Toast Notification System */}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route
              path="/projects"
              element={<ProtectedRoute children={<Projects />} />}
            /> */}
            <Route
              path="/add-post"
              element={<ProtectedRoute children={<AddProject />} />}
            />
            <Route
              path="/projects"
              element={<ProtectedRoute children={<ViewProjects />} />}
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
