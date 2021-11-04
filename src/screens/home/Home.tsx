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

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-black w-full text-white flex justify-end items-center">
        <div className="w-[20%]"></div>
        <img src={header} className="w-[80%]" alt="" />
        <div className="flex flex-col justify-center items-start w-[60%] absolute top-32 left-12 ">
          <div className=" text-white text-xl font-bold w-full p-24 md:text-8xl ">
            IT’S ALL ABOUT WHAT YOU CAN ACHIEVE
            <div className=" text-white text-2xl font-bold w-full pt-5">
              Empower yourself to make the changes you need to make
            </div>
            <a
              href="/mas"
              className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-2xl my-4 inline-block py-2 px-16"
            >
              LET´S GEY STARTED
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Content*/}
          <div className="px-4 py-6 sm:px-0 flex flex-col ">
            <div className="font-serif font-extrabold text-black flex flex-row " />
            <h1 className="object-none object-left pt-10 text-4xl font-black">
              POPULAR CLASSES
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-10">
              <div>
                <Link to="/Cardio">
                  <img src={Cardio} className="w-auto h-auto " alt="" />
                  <h1 className="object-none object-left pt-10 text-3xl font-black">
                    Cardio
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/Airyoga">
                  <img src={Airyoga} className="w-auto h-auto  pl-10 " alt="" />
                  <h1 className="object-none object-left pt-10 text-3xl font-black pl-10">
                    AirYoga
                  </h1>
                </Link>
              </div>

              <div>
                <Link to="/Lifting">
                  <img src={Lifting} className="w-auto h-auto pt-20  " alt="" />
                  <h1 className="object-none object-left pt-10 text-3xl font-black">
                    Lifting
                  </h1>
                </Link>
                <a href="Lifting"></a>
              </div>
              <div>
                <Link to="/Back">
                  <img
                    src={Back}
                    className="w-auto h-auto pt-20 pl-10  "
                    alt=""
                  />
                  <h1 className="object-none object-left pt-10 text-3xl font-black pl-10">
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
      <div className="bg-black w-full text-white flex justify-end items-center relative">
        {/*   <div className="  max-w-8xl mx-auto  sm:px-6 lg:px-18 bg-About">*/}
        <div className="w-[20%]"></div>
        <img src={About} className="w-[80%]" alt="" />
        <div className="flex flex-col justify-center items-start w-[60%] absolute inset-y-0 left-0 p-24">
          <div className="text-white text-4xl font-bold container w-[50%] h-[50%]">
            <h1>ABOUT BRONX</h1>
            <h2 className="object-none object-left pt-10 text-base font-black text-white">
              We’re not here to carry you to fitness, we’re here to motivate you
              to carry yourself to your goals.If
            </h2>
            <h2 className="object-none object-left pt-5 text-base font-black text-white">
              you’re not sure what your goals are, or don’t know where to start
              on your fitness journey, come in and speak to one of our qualified
              trainers who can help you develop a plan.
            </h2>
            <a
              href="/mas"
              className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-lg my-4 inline-block py-2 px-16"
            >
              Shedule
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <div className="w-full text-white bg-gris flex justify-start">
        <img src={classes} className="w-[80%]" alt="" />
        <div className=" text-white text-4xl font-bold w-full p-28">
          <h1>CLASSES</h1>
          <h2 className="object-none object-left pt-10 text-base font-black text-white">
            We host dozens of classes every day, from deadlifting and HIIT to
            yoga and pilates. We also have different classes for varying levels
            of ability.
          </h2>
          <h2 className="object-none object-left pt-5 text-base font-black text-white">
            Check out our individual class pages to see what’s on when, and stop
            on by for a chat if you want to see how we do things.
          </h2>
          <a
            href="/mas"
            className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-lg my-4 inline-block py-2 px-16"
          >
            Classes
          </a>
        </div>
      </div>
      <div className="bg-white h-[30%] w-[40%] relative">
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

export default Home;
