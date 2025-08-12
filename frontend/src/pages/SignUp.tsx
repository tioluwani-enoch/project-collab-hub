import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { signupUser } from "../lib/redux-features/authSlice";
import { TextField, Chip, Autocomplete, Box } from "@mui/material";
import { useState } from "react";

const yearOptions = [
  { value: "freshman", label: "Freshman" },
  { value: "sophomore", label: "Sophomore" },
  { value: "junior", label: "Junior" },
  { value: "senior", label: "Senior" },
];

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  description: Yup.string().required("Description is required"),
  tags: Yup.array().min(1, "At least one course tag is required"),
  year: Yup.string().required("Please select your academic year"),
});

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tagInput, setTagInput] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
          Create an Account
        </h2>

        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
            description: "",
            tags: [],
            year: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await dispatch(signupUser(values) as any).unwrap();
              resetForm();
              toast.success("🎉 Account created successfully!");
              setTimeout(() => toast.warning("Redirecting to login..."), 2000);
              setTimeout(() => navigate("/login"), 3000);
            } catch (error: any) {
              toast.error(error?.message || "Something went wrong!");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
              if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
                e.preventDefault();
                if (!values.tags.includes(tagInput.trim())) {
                  setFieldValue("tags", [...values.tags, tagInput.trim()]);
                }
                setTagInput("");
              }
            };

            const handleDeleteTag = (tagToDelete: string) => {
              setFieldValue(
                "tags",
                values.tags.filter((tag) => tag !== tagToDelete)
              );
            };

            return (
              <Form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full border border-neutral-400 hover:border-black rounded-lg px-4 py-2"
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
                    className="w-full border border-neutral-400 hover:border-black rounded-lg px-4 py-2"
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
                    className="w-full border border-neutral-400 hover:border-black rounded-lg px-4 py-2"
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
                    className="w-full border border-neutral-400 hover:border-black rounded-lg px-4 py-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    className="w-full border border-neutral-400 hover:border-black rounded-lg px-4 py-2"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Tags with Chips */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Courses Completed (tags)
                  </label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    placeholder="Type and press Enter or Comma"
                    sx={{
                      "& input": {
                        color: "black",
                        "&::placeholder": {
                          color: "gray",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  <Box className="flex flex-wrap gap-1 mt-2">
                    {values.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        onDelete={() => handleDeleteTag(tag)}
                        color="primary"
                      />
                    ))}
                  </Box>
                  <ErrorMessage
                    name="tags"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Year Single Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Year
                  </label>
                  <Autocomplete
                    options={yearOptions}
                    getOptionLabel={(option) => option.label}
                    value={
                      yearOptions.find((opt) => opt.value === values.year) ||
                      null
                    }
                    onChange={(_, newValue) => {
                      setFieldValue("year", newValue ? newValue.value : "");
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Select year"
                      />
                    )}
                  />
                  <ErrorMessage
                    name="year"
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
            );
          }}
        </Formik>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Log in here
          </Link>
        </p>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
}
