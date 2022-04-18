import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function MyComponent() {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ishalf={true}
        size={24}
        ratingValue={rating.toFixed(1)} /* Available Props */
      />
    </div>
  );
}

//ffgfgfgfgfg
