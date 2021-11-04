import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import header from "../../assets/home/background_header.png";
import Logo from "../recursos/prueba daniel/home/logo.png";
import Cardio from "../recursos/prueba daniel/classes/cardio/cardio.png";
import Airyoga from "../recursos/prueba daniel/classes/yoga/yoga.png";
import Lifting from "../recursos/prueba daniel/classes/ligting/ligting.png";
import Back from "../recursos/prueba daniel/classes/press_back/press_back.png";
import About from "../../assets/home/background_about.png";
import classes from "../../assets/home/background_classes.png";
import Ab from "../../bg_about.png";

import { Link } from "react-router-dom";

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full flex flex-col items-center bg-black ">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Content*/}
          <div className="px-4 py-6 sm:px-0 flex flex-col ">
            <div className="font-serif font-extrabold text-white flex flex-row p-12 " />
            <h1 className="object-none object-left pt-40 text-4xl font-black text-white">
              SCHEDULE
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-52 gap-y-4 pt-40">
              <div>
                <h1 className="object-none object-left pt-10 text-2xl font-black text-white">
                  Instructors changing every week
                </h1>
              </div>
              <div></div>

              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Cardio Boxing
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Monday and Friday 17:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Air Yoga
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Wedneday and Saturday 8:00 AM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Street Dances
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Thursday 18:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Body Building
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Monday and Wednesday 14:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Cardio Boxing
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Monday and Friday 17:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Press & Back
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Day 10:00 AM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Callanetics
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Tuesday 16:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Cardio
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Day 8:00 PM
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Lifting
                </h2>
              </div>
              <div>
                <h2 className="object-none object-left pt-10 text-base font-black text-white">
                  Every Day 9:00 PM
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
          {/* /End replace */}
        </div>
      </main>

      <div className="bg-white h-full w-full items-center justify-between">
        <h2 className="font-serif font-extrabold text-black text-4xl ">
          ARE YOU READY FOR CHANGES?
        </h2>
        <a
          href="/mas"
          className="bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-2xl my-4 inline-block py-2 px-16"
        >
          Make it happen
        </a>
      </div>
    </div>
  );
};

export default Schedule;
