import React from "react";

const RightCardConten = (props) => {
    
  return (
    <div className="absolute h-full w-full p-6 flex flex-col justify-between">
      <h2 className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
        {props.id+1}
      </h2>
      <div>
        <p className="mb-5 text-white font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque libero
          dolor iste. At asperiores sapiente voluptatibus impedit officia odit,
          commodi beatae temporibus.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 px-3 py-2 rounded-3xl">
            {props.tag}
          </button>
          <button className="bg-blue-600 px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardConten;
