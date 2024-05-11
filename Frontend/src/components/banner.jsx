import React from "react";
import BannerImg from "../assets/banner.png" 
function banner() {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello , Welcoming You to the World of{" "}
              <span className="text-pink-500">Fitness !!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              mollitia nam hic voluptates optio deserunt inventore accusantium
              asperiores fugiat ratione.
            </p>
            
            
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2">
            <img  src={BannerImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default banner;
