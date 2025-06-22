import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../lib/redux-features/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };

  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required("Username or email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const action = await dispatch(
        loginUser({
          username: values.usernameOrEmail,
          password: values.password,
        }) as any
      );

      if (loginUser.fulfilled.match(action)) {
        toast.success("Login successful!");
        setTimeout(() => {
          toast.warning("Redirecting to profile...");
        }, 2000);
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      } else if (loginUser.rejected.match(action)) {
        toast.error(action.payload?.message || "Invalid credentials.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Log In to CompileKnox
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Username or Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username or Email
                </label>
                <Field
                  type="text"
                  name="usernameOrEmail"
                  placeholder="Enter your username or email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="usernameOrEmail"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? "Logging in..." : "Log In"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
