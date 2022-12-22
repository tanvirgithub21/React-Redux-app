import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const AddContent = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    console.log(e.target.value);
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((element, i) => i != index));
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px] bg-[#f7f7f7] border-2 border-gray-200 rounded-md">
          <form
            class="py-6 px-9"
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div class="mb-2">
              <label class="mb-5 block text-xl font-semibold text-center text-[#07074D]">
                Add Content
              </label>

              <div class="mb-1">
                <input type="file" name="file" id="file" class="sr-only" />
                <label
                  for="file"
                  class="relative flex min-h-[150px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] bg-white p-7 text-center"
                >
                  <div>
                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              <div class="mb-5 rounded-md bg-white py-4 px-8">
                <div className="mb-2">
                  <label
                    for="content_title"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content Title
                  </label>
                  <input
                    type="text"
                    id="content_title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your Content Title here..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="content_details"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content Details
                  </label>
                  <textarea
                    id="content_details"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your Content Details here..."
                  ></textarea>
                </div>

                <div className="flex gap-3 flex-wrap items-center bg-gray-50 rounded-lg border border-gray-300 p-2">
                  {tags?.map((tag, index) => {
                    console.log(tag, tags);
                    return (
                      <div
                        key={index}
                        className="px-2 py-1 rounded-lg bg-gray-300 font-medium inline-flex items-center mt-2"
                      >
                        <span>{tag}</span>
                        <span
                          onClick={() => handleRemoveTag(index)}
                          className=" text-black text-xl ml-1 cursor-pointer"
                        >
                          <RiCloseCircleFill />
                        </span>
                      </div>
                    );
                  })}

                  <input
                    className="px-2 py-1 mt-2 flex-grow border-none outline-none bg-gray-50 "
                    type="text"
                    name="tag"
                    id="tag"
                    placeholder="Add Tag..."
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
            </div>

            <div>
              <span class="inline-block w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white cursor-pointer">
                Send File
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
