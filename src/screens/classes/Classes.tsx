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
import ligting from "../../assets/classes/ligting/ligting.png";
import callanetic from "../../assets/classes/callanetics/callanetics.png";
import b_b from "../../assets/classes/body_building/body_building.jpeg";
import C_boxing from "../../assets/classes/cardio_boxing/cardio_boxing.png";
import s_dances from "../../assets/classes/sport_dances/sport_dances.png";

import { Link } from "react-router-dom";

const Classes = () => {
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
              CLASSES
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-52 gap-y-16 pt-40">
              <div>
                <Link to="/callanetics">
                  <img src={callanetic} className="w-auto h-auto " alt="" />
                  <h1 className="object-none object-left text-3xl font-black text-white">
                    Cardio
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/Airyoga">
                  <img src={Airyoga} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    AirYoga
                  </h1>
                </Link>
              </div>

              <div>
                <Link to="/Lifting">
                  <img src={Lifting} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Lifting
                  </h1>
                </Link>
                <a href="Lifting"></a>
              </div>

              <div>
                <Link to="/sport_dances">
                  <img src={s_dances} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Lifting
                  </h1>
                </Link>
                <a href="Lifting"></a>
              </div>
              <div>
                <Link to="/cardio_boxing">
                  <img src={C_boxing} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Press & Back
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/cardio">
                  <img src={Cardio} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Press & Back
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/press_back">
                  <img src={Back} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left pt-10 text-3xl font-black">
                    Press & Back
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/body_building">
                  <img src={b_b} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Press & Back
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="/"
              className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-2xl my-4 inline-block py-2 px-16"
            >
              LET´S GEY STARTED
            </a>
          </div>
          {/* /End replace */}
        </div>
      </main>

      <div className="bg-white h-full w-full items-center justify-between">
        <h2 className="font-serif font-extrabold text-black text-4xl p-16">
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

export default Classes;
