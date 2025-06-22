import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, "Title must be at least 10 characters")
    .max(100, "Title can't exceed 100 characters")
    .required("Title is required"),
  content: Yup.string()
    .min(30, "Content must be at least 30 characters")
    .required("Content is required"),
});

export default function AddPosts() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">
          Ask a New Question
        </h2>

        <Formik
          initialValues={{ title: "", content: "" }}
          validationSchema={PostSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("New Post:", values);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter a clear and concise title"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Body
                </label>
                <Field
                  as="textarea"
                  name="content"
                  rows={8}
                  placeholder="Describe your problem in detail..."
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Post"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
