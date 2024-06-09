import ShowComment from "./ShowComment";
import AddComment from "./AddComment";
import React, { useEffect, useState } from "react";

const Comments = (props) => {
  const size = 5;

  const [data, setData] = useState([]);
  // const totalElements = useRef(null);

  const [page, setPage] = useState(0);
  // const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // const [number, setNumber] = useState(1);

  useEffect(() => {
    // setPage(0); // Reset page to 0 when props change
    fetchComments();
  }, [page]); // page

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost/post/${props.id}/comments?page=${page}&size=${size}`);
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }

      const responseData = await response.json();

      //const reversedComments = data.content.reverse(); // Reverse comments order
      setData([...data, ...responseData.content]);
      console.log(data);
      setTotalPages(responseData.totalPages);
      // setTotalElements(responseData.totalElements);
      // setNumber(responseData.number);
      // return responseData.content;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {/* <p>{time.toLocaleTimeString()}</p> */ console.log("comment component render")}

      <AddComment id={props.id} onUpdateComments={fetchComments} />

      {data.length === 0 && (
        <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
          <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg">
            <div className="pl-5">
              <div className="flex justify-center items-center">
                <h3 className="dark:text-white text-[22px] font-medium">No comments available</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      {data.map((values) => (
        <ShowComment key={values.id} name={values.name} message={values.message} time={values.time} image={values.image} />
      ))}
      {page === totalPages - 1 || data.length === 0 ? null : (
        <button
          onClick={() => {
            setPage((preValue) => preValue + 1);
            console.log("comment btn click", page, totalPages);
          }}
          className="comment-btn">
          Load More
        </button>
      )}
    </>
  );
};

export default Comments;
