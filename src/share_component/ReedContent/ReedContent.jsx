import React from "react";
import { useParams } from "react-router-dom";

const ReedContent = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="my-10">
      <div className="w-full md:max-w-[35rem] mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="image_box relative ease-in-out duration-300">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>

          <p className="text-base md:text-lg text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            culpa hic odio voluptas unde blanditiis nemo quia omnis, ex ipsum
            reprehenderit sint accusamus tenetur vel et perferendis nesciunt
            quisquam eius, eligendi dolores? Facilis odit ad, sequi alias
            inventore expedita harum quaerat beatae rerum laborum architecto.
            Alias eius rem unde maxime.
          </p>

          {
            // tag section
          }
          <div className="my-5 flex flex-wrap gap-2">
            <span className="text-sm md:text-lg text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm md:text-lg text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm md:text-lg text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
            <span className="text-sm md:text-lg text-gray-900 px-2 font-medium py-1 rounded-md bg-gray-300">
              #html
            </span>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </button>

            <button
              type="button"
              className="btn bg-sky-500 hover:bg-sky-600 text-white"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReedContent;
