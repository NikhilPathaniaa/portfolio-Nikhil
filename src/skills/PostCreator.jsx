import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const PostCreator = ({ placeholder }) => {
  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [languages, setLanguages] = useState("");
  const [preview, setPreview] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [theme, setTheme] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, client, languages, theme, preview, content, image, video };
    console.log(data);

    fetch("https://portfolio-back-g5on.onrender.com/add/post", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(console.log("new data added"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">Post Creation </h2>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        <h3 className="text-4xl">
          <span className="text-gray-lite dark:text-[#A6A6A6]">I'm always open to discussing product</span>
          <br />
          <span className="font-semibold dark:text-white">design work or partnerships.</span>
        </h3>

        <form>
          <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
          <div className="empty_notice">
            <span>Please Fill Required Fields</span>
          </div>

          {/* <!-- name input  --> */}
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required=""
            />

            <label
              for="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              title *{" "}
            </label>
          </div>

          {/* <!-- email input  --> */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="client"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
              placeholder=" "
              id="email"
              required=""
            />
            <label
              for="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              client *{" "}
            </label>
          </div>

          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              id="name"
              name="language"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required=""
            />

            <label
              for="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              languages *{" "}
            </label>
          </div>
          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="text"
              id="name"
              name="preview"
              value={preview}
              onChange={(e) => setPreview(e.target.value)}
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required=""
            />

            <label
              for="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              preview *{" "}
            </label>
          </div>
          {/* <!-- message input  --> */}
          <div className="relative z-0 w-full mb-8 group">
            <JoditEditor
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ">
              Content *{" "}
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
              placeholder=" "
              id="message"
              required=""
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Image *{" "}
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
              placeholder=" "
              id="message"
              required=""
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Video *{" "}
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
              placeholder=" "
              id="message"
              required=""
            />
            <label
              for="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Theme *{" "}
            </label>
          </div>

          <input
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default PostCreator;
