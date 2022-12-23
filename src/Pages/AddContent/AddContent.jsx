import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { POST_CONTENT } from "../../Redux/actionTypes/contentActionTypes";

const AddContent = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({});

  console.log(formData);

  // Save tags for press Enter key
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    dispatch({ type: POST_CONTENT, payload: e.target.value });
    setTags([...tags, value]);

    e.target.value = "";
  };

  // Removed selected Tag
  const handleRemoveTag = (index) => {
    setTags(tags.filter((element, i) => i !== index));
  };

  // Set Image preview
  const handleImagePreview = (e) => {
    const image = e.target.files[0];
    if (image) {
      setImage(image);
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-[#f7f7f7] border-2 border-gray-200 rounded-md">
          <form
            className="py-6 px-9"
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className="mb-2">
              <label className="mb-5 block text-xl font-semibold text-center text-[#07074D]">
                Add Content
              </label>

              <div className="mb-1">
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  id="file"
                  required
                  onChange={handleImagePreview}
                  className="sr-only"
                />

                {/* images Uploaded fields */}
                {!image && (
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[250px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] bg-white p-7 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                )}

                {/* images preview */}
                {image && (
                  <div
                    style={{
                      backgroundImage: `url(${URL.createObjectURL(image)})`,
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="flex min-h-[250px] rounded-md border border-dashed border-[#e0e0e0] overflow-hidden relative"
                  >
                    <div
                      title="Remove Image"
                      onClick={() => setImage(null)}
                      className="w-7 h-7 bg-gray-700 flex justify-center items-center rounded-full absolute top-2 right-2 border-2 border-white cursor-pointer"
                    >
                      <IoClose className="text-white text-2xl" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-5 rounded-md bg-white py-4 px-8">
                <div className="mb-2">
                  <label
                    htmlFor="content_title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content Title
                  </label>
                  <input
                    type="text"
                    id="content_title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your Content Title here..."
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="content_details"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Content Details
                  </label>
                  <textarea
                    id="content_details"
                    required
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your Content Details here..."
                  ></textarea>
                </div>

                {/* Add tag fields */}
                <div className="flex gap-3 flex-wrap items-center bg-gray-50 rounded-lg border border-gray-300 p-2">
                  {tags?.map((tag, index) => (
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
                  ))}

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
            {/* Submit Button ( Note: there button tag not used because facing problem! ) */}
            <button
              type="submit"
              className="inline-block w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white cursor-pointer"
            >
              Send File
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContent;
