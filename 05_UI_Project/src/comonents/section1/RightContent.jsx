import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
    
  return <div className="h-full w-3/4 flex flex-nowrap gap-10 overflow-x-auto p-6">
    {props.users.map(function(elem){
        return <RightCard img={elem.img}/>
    })}
  </div>;
};

export default RightContent;
