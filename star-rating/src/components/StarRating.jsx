import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    setRating(star);
    if (onRate) onRate(star);
  };

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            size={30}
            className={`cursor-pointer transition-colors duration-200 ${
              starValue <= (hover || rating) 
                ? "text-yellow-400"
                : "text-gray-300"
            } hover:scale-110`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;