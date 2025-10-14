import React from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";

const Scetion1 = (props) => {
  
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <PageContent users={props.users}/>
    </div>
  );
};

export default Scetion1;
