import React from 'react'
function Exercise3({ rate, onChange }) {
  const [rating, setRating] = React.useState(rate)

  console.log(rating);
  return (
    <div style={{ display: "flex" }}>
      <Star active={rating >= 1} onClick={() => setRating(1)} />
      <Star active={rating >= 2} onClick={() => setRating(2)} />
      <Star active={rating >= 3} onClick={() => setRating(3)} />
      <Star active={rating >= 4} onClick={() => setRating(4)} />
      <Star active={rating >= 5} onClick={() => setRating(5)} />
    </div>
  );
}

function Star({ active, ...props }) {
  return (
    <svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M10 .5l2.781 5.595L19 6.998l-4.5 4.353 1.062 6.149L10 14.595 4.438 17.5 5.5 11.35 1 6.999l6.219-.903L10 .5v0z"
        stroke={active ? "#FFA84C" : "#999"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


 export default Exercise3