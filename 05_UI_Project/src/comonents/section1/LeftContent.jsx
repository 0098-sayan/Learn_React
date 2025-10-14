import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between px-4 py-3 ">
      <HeroText/>
      <Arrow/>
    </div>
  );
};

export default LeftContent;
