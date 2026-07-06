import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center px-5">
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-md">

        <FiAlertTriangle
          className="mx-auto text-red-500 mb-5"
          size={70}
        />

        <h1 className="text-6xl font-bold text-slate-800">
          404
        </h1>

        <p className="text-gray-600 mt-3">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          to="/login"
          className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition"
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
};

export default NotFound;