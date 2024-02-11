// Rating.js
import React, { useState } from 'react';
//imported some neccessary stuffs for rating.
import { FaStar } from 'react-icons/fa';

//created function for rating
const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  //It will handle the change as user clicks the star.
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  //crated array for showing 5 stars.as user clicks stars the message will appear there.
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <FaStar
            key={index}
            className="star"
            color={ratingValue <= rating ? "#f39c12" : "#95a5a6"}
            size={32}
            onClick={() => handleRatingClick(ratingValue)}
          />
        );
      })}
      {rating > 0 && <p>Thanks for rating this site!</p>}
    </div>
  );
};

export default Rating;
