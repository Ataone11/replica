import React, { useEffect, useState } from "react";

import Trainer1 from "../../assets/personal_workouts/mathew.png";
import Trainer2 from "../../assets/personal_workouts/john.png";
import Trainer3 from "../../assets/personal_workouts/inna.png";
import s_dances from "../../assets/classes/sport_dances/sport_dances.png";

import { Link } from "react-router-dom";

const Singup = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full flex flex-col items-center bg-black ">
      <div className="w-full">
        <div className="mx-auto py-6">
          {/* Content*/}
          <div className="px-4 py-6 sm:px-0 flex flex-col ">
            <div className="font-serif font-extrabold text-white flex flex-row p-20" />
            <h1 className="object-none object-left pt-40 text-5xl font-bold text-white pl-36">
              SIGN UP FOR A WORKOUT WITH A PERSONAL COACH
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-52 gap-y-16 pt-40">
              <div className="justify-around font-bold container w-[60%] h-[50%] pl-36">
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 p-3 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  py-3 px-7 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="your name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-12 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-24 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Your address name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-12 px-24 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Enter your menssage"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <h1 className="object-none object-left text-3xl font-black">
                  We will contact you through your email about your upcoming
                  workout!
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
          {/* /End replace */}
        </div>
      </div>

      <div className="bg-white h-[45%] w-full">
        <h2 className="font-bold text-black text-4xl pt-24 pl-24">
          ARE YOU READY FOR CHANGES?
        </h2>
        <a
          href="/mas"
          className="bg-primary  hover:bg-opacity-100 text-white transition duration-200 group text-xl mx-12 my-8 inline-block py-4 px-7"
        >
          Make it happen
        </a>
        <div className="pt-12"></div>
      </div>
    </div>
  );
};

export default Singup;
