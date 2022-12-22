import React from "react";

const ContentCard = () => {
  return (
    <div>
      <div className="max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#df">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#ds">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>

          <a
            href="#ds"
            className="inline-flex items-center px-2 py-1 text-xm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          {
            // tag section
          }
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-sm text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
