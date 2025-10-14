import React from "react";
import RightCardConten from "./RightCardConten";

const RightCard = (props) => {
    
  return (
    <div className="h-full shrink-0 w-80 relative bg-amber-400 flex rounded-4xl overflow-hidden">
      <img
        className="object-cover"
        src={props.img}
        alt=""
      />
      <RightCardConten />
    </div>
  );
};

export default RightCard;
