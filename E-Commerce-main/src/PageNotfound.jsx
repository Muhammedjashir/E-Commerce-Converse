import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Error Message */}
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist. It might have been removed, or the URL could be incorrect.
      </p>

      {/* Go Back Button */}
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition duration-300"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
