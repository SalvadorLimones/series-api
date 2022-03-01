import React, { useState } from "react";

const Character = ({ char }) => {
  const [showDetails, toggleShowDetails] = useState(false);
  return (
    <div>
      <p>{char.name}</p>
      {showDetails && <p>{char.details}</p>}
      <button onClick={() => toggleShowDetails(!showDetails)}>
        {showDetails ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default Character;
