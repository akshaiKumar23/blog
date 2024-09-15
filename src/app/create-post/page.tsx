import {
  // getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { createPost } from "../actions/actions";
// import { redirect } from "next/navigation";

const CreatePostPage = async () => {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=/create-post");
  // }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Create a New Post
        </h2>
        <form action={createPost}>
          <div className="mb-6">
            <label htmlFor="postTitle" className="block text-gray-400 mb-2">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              id="postTitle"
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="postDescription"
              className="block text-gray-400 mb-2"
            >
              Post Description
            </label>
            <textarea
              id="postDescription"
              name="description"
              rows={5}
              className="w-full p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter post description"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        <div className="mt-8 text-center">
          <LogoutLink className="text-indigo-400 hover:text-indigo-300 transition">
            Logout
          </LogoutLink>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPage;
