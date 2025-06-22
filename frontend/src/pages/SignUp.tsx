import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignUpType {
  name: string;
  username: string;
  email: string;
  password: string;
}

async function SignUp(values: SignUpType) {
  try {
    const response = await axios.post(
      "http://localhost:9999/api/v1/user/create",
      values
    );
    toast.success("🎉 Account created successfully!");
    console.log("Response:", response.data);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      toast.error(`❌ ${error.response.data.message}`);
    } else {
      toast.error("Something went wrong!");
    }
    console.error("Error:", error.message);
    throw error;
  }
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Create an Account
        </h2>

        <Formik
          initialValues={{ name: "", username: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await SignUp(values);
              resetForm(); // Clear form after success
            } catch (error: any) {
              // already handled in the signup function
            } finally {
              setSubmitting(false);
              setTimeout(() => {
                toast.warning("Redirecting to login...")
              }, 2000);
              setTimeout(() => {
                navigate("/login");
              }, 3000);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Log in here
          </Link>
        </p>

        {/* Toast container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}
