import React from 'react';
import { FaStar } from "react-icons/fa";
import { useState } from "react";



const StarRating = () => {
    const [rating, setRating] = useState(null);
    

    return (
       
            <div className="ratings">

                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (

                        <label className="stars">
                            <input required type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)} />
                            <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} size={25} />
                        </label>

                    );
                })}

            </div >
            );
       
  
};

export default StarRating;


