import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars] = useState(2);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}

/*export default function StarRating({ totalStars = 5 }) {
//    return createArray(totalStars).map((n, i) => <Star key={i} selected = { i > 5 ? false: true } />);
    return createArray(totalStars).map((n, i) => <Star key={i} />);
}*/