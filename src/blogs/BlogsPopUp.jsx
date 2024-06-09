import React, { useRef } from "react";

const BlogsPopUp = ({ onClose }) => {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div>
      <div ref={modelRef} onClick={closeModel} id="ex1" className="modal-container modal ">
        <div className="dark:scrollbarDark scrollbarLight overflow-y-scroll max-h-[60vh] lg:max-h-[80vh]">
          <div className="pr-3 pb-2">
            <img className="w-full md:h-[450px] object-cover rounded-xl mt-6" src="images/blog_images/1.jpg" alt="blog image" />
            <div className="flex mt-4 text-tiny text-black dark:text-white">
              <span>177 April</span>
              <span className="dot-icon">Inspiration</span>
            </div>
            <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">How to Own Your Audience by Creating an Email List.</h2>
            <p className="dark:text-white font-normal text-[15px] sm:text-sm my-4">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.{" "}
            </p>
            <p className="dark:text-white font-normal text-[15px] sm:text-sm my-4">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis
              omnis doloremque soluta inventore dolorum consequuntur.{" "}
            </p>
            <p className="dark:text-white font-normal text-[15px] sm:text-sm my-4">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.{" "}
            </p>
          </div>

          <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
            <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
              <div>
                <img className="md:w-[125px] rounded-xl" src="images/about/about.jpg" alt="blog image" />
              </div>
              <div className="pl-5">
                <div className="flex justify-between items-center">
                  <h3 className="dark:text-white text-[22px] font-medium">Rafia Ana</h3>
                  <span className="dark:text-[#dedede] text-tiny">15 min ago</span>
                </div>
                <p className="dark:text-white md:pr-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nam ad, unde vel aut soluta atque consequatur. Omnis, debitis nihil?</p>
                <button className="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">Reply</button>
              </div>
            </div>
          </div>

          <div className="flex items-center md:justify-end space-x-4 mt-8 mr-3">
            <h6 className="dark:text-white text-[20px]">Login with:</h6>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#1773EA]">
                  <i className="fa-brands fa-facebook-f"></i>
                </span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#1C9CEA]">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#e14a84]">
                  <i className="fa-brands fa-dribbble"></i>
                </span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#0072b1]">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>

          <div className="pt-3">
            <div className="pr-3 pb-4">
              <form className="w-full">
                <label className="block mb-2">
                  <span className="dark:text-white text-[25px] font-medium">Leave a Reply</span>
                  <textarea className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray" rows="3"></textarea>
                </label>
                <button className="comment-btn">Comment</button>
              </form>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="close bg-close-light dark:bg-close-dark">
          Close
        </button>
      </div>
      {/* modal  for item one end */}
    </div>
  );
};

export default BlogsPopUp;
