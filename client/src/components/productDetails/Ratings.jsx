import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Ratings = ({ stars, reviews }) => {
  const ratings = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-700" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-yellow-700" />
        ) : (
          <FaRegStar className="text-yellow-700" />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-row-reverse items-center gap-1" dir="ltr">
      {ratings}
      {reviews ? <span className="text-">({reviews.length})</span> : null}
    </div>
  );
};

export default Ratings;
