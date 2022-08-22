import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="mt-24 ml-20 pl-10 pb-10 h-fit lg:h-screen">
      <div className="flex flex-wrap justify-center">
        <div className="ml-8 lg:ml-0">
          <p className="text-4xl lg:text-6xl text-gray-900 dark:text-white m-5 sm:ml-0 lg:ml-40 text-center">
            Welcome to the Dashboard!
          </p>
          <p className="text-md lg:text-lg text-gray-900 dark:text-white m-5 sm:ml-0 lg:ml-52 text-center">
            You can access the data for the same by clicking the buttons below.
          </p>
        </div>
        <div className="flex flex-wrap p-5">
          <Link
            to="/Users"
            className="block m-10 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Users
            </h5>
          </Link>
          <Link
            to="/Products"
            className="block m-10 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Products
            </h5>
          </Link>
          <Link
            to="/Orders"
            className="block m-10 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Orders
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
