import React from "react";

const Sec1 = () => {
  return (
    <div>
      <div className=" w-full h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="w-[100%] bg-[url(/curlly.png)] bg-no-repeat flex justify-center">
          <div className="w-[90%] flex flex-col md:flex-row items-center justify-between  ">
            <div className='flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left'>
              <h1 className="md:text-[72px] text-[36px] mb-4 text-black font-bold justify-evenly">
                Project <br /> Management
              </h1>
              <p className="text-black mb-7 text-[18px]">
                Images, videos, PDFs and audio files are supported. <br /> Create math
                expressions and diagrams directly from <br /> the app. Take
                photos with the mobile app and <br /> save them to a note.
              </p>
              <button className="flex gap-2 items-center font-medium px-[40px] py-[20px] md:mt-0 mt-10 rounded-lg bg-[#4F9CF9]">
                Get Started <img src="/VectorR.svg" alt="right" />
              </button>
            </div>
            <div className="md:w-[500px] md:h-[350px] w-[350px] h-[200px] mt-20 md:mt-0 bg-[#C4DEFD]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;