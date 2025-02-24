import React from "react";

const Home = () => {
  return (
    <>
      <div>
        {/* nav-bar */}
        <div className=" h-[10vh] w-screen flex items-center justify-evenly bg-[#2A2A2A]">
          <div className="h-10 w-1/4 flex gap-3 px-5">
            <img
              src="https://img.lovepik.com/element/45006/8218.png_860.png"
              alt=""
            />
            <h1 className="text-2xl font-bold text-[#E1E1E1] roboto">
              Artisthaan
            </h1>
          </div>
          <div className=" w-2/4 mt-2 flex justify-center items-start">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl border-none h-10 bg-[#E1E1E1] placeholder:text-base py-2 px-4 w-full mb-3 text-[#6E6E6E]"
            />
            <i className="ri-search-2-line h-10 w-10 text-2xl bg-[#E1E1E1] text-[#6e6e6e] rounded-r-md p-1"></i>
          </div>

          <div className=" w-1/4 h-full flex justify-end items-center gap-10 pr-5">
            <div className="flex justify-end items-center gap-4">
              <i className="ri-home-line  text-2xl cursor-pointer text-[#E1E1E1] opacity-40 hover:opacity-100"></i>
              <i className="ri-compass-line text-2xl cursor-pointer text-[#E1E1E1] opacity-40 hover:opacity-100"></i>
              <i className="ri-message-3-line text-2xl cursor-pointer text-[#E1E1E1] opacity-40 hover:opacity-100"></i>
              <i className="ri-notification-4-line text-2xl cursor-pointer text-[#E1E1E1] opacity-40 hover:opacity-100"></i>
            </div>
            <div>
              <img
                className="h-[40px] w-[40px] rounded-full bg-contain cursor-pointer"
                src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* main */}
        <div></div>
        {/* footer  */}
        <div></div>
      </div>
    </>
  );
};

export default Home;
