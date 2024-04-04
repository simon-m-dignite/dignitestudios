import React, { useState } from "react";

const TechnologyCard = ({ technology }) => {
  const [image, setImage] = useState(technology?.gray);
  return (
    <div
      onMouseOver={() => setImage(technology?.color)}
      onMouseOut={() => setImage(technology?.gray)}
      className="w-[88px] h-[88px] flip-vertical-left  rounded-[20px] transition-all duration-300 flex items-center justify-center bg-[#E7E7E7]/[0.2]"
    >
      <img src={image} />
    </div>
  );
};

export default TechnologyCard;
