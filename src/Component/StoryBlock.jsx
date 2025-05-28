import React from "react";

const StoryBlock = ({ title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col  md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}>
      <div className="md:w-1/2  border-green-500 overflow-hidden">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
      <div className="md:w-1/2 px-6 mt-6 md:mt-0">
        <h2 className="text-[32px]  mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 ">{description}</p>
        {/* <button className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded-md">
          → Explore
        </button> */}
        <button className="text-green-800 border px-5 py-3 rounded-lg">
              EXPLORE NOW
        </button>
      </div>
    </div>
  );
};

export default StoryBlock;
