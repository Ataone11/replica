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
import Trainer1 from "../../assets/personal_workouts/mathew.png";
import Trainer2 from "../../assets/personal_workouts/john.png";
import Trainer3 from "../../assets/personal_workouts/inna.png";
import s_dances from "../../assets/classes/sport_dances/sport_dances.png";

import { Link } from "react-router-dom";

const Trainer = () => {
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
            <div className="font-serif font-extrabold text-white flex flex-row p-12 " />
            <h1 className="object-none object-left pt-40 text-4xl font-black text-white">
              PERSONAL TRAINERS
            </h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-52 gap-y-16 pt-40">
              <div>
                <Link to="/callanetics">
                  <h1 className="object-none object-left pt-10 text-4xl font-black text-white">
                    Mathew Heeron
                    <h2 className="object-none object-left pt-10 text-base font-black text-white">
                      Mathew is the expert to talk to if your fitness goal is to
                      lose weight or tone up. Working clients through
                      high-intensity workouts and tailored fitness plans, Mat
                      doesn’t take no for an answer when it comes to your goals.
                    </h2>
                    <h2 className="object-none object-left pt-5 text-base font-black text-white">
                      With a background in sports psychology and physical
                      therapy, Matt understands how the mind and body need to
                      work together for you to achieve success.
                    </h2>
                    <a
                      href="/mas"
                      className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-lg my-4 inline-block py-2 px-16"
                    >
                      Shedule Workout
                    </a>
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/Airyoga">
                  <img src={Trainer1} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    AirYoga
                  </h1>
                </Link>
              </div>

              <div>
                <Link to="/Lifting">
                  <img src={Trainer2} className="w-auto h-auto" alt="" />
                  <h1 className="object-none object-left text-3xl font-black">
                    Lifting
                  </h1>
                </Link>
                <a href="Lifting"></a>
              </div>

              <div>
                <Link to="/callanetics">
                  <h1 className="object-none object-left pt-10 text-4xl font-black text-white">
                    John Heeron
                    <h2 className="object-none object-left pt-10 text-base font-black text-white">
                      Whether you’re new to boxing or a seasoned fighter, John
                      can teach you a thing or two about keeping fit for the
                      ring and understanding your opponent.
                    </h2>
                    <h2 className="object-none object-left pt-5 text-base font-black text-white">
                      While he comes from the world of professional boxing, John
                      takes a holistic approach to fitness, and is just as
                      likely to throw you into a yoga class as he is to throw
                      you around the boxing ring.
                    </h2>
                    <a
                      href="/mas"
                      className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-lg my-4 inline-block py-2 px-16"
                    >
                      Shedule Workout
                    </a>
                  </h1>
                </Link>
                <a href="Lifting"></a>
              </div>
              <div>
                <Link to="/callanetics">
                  <h1 className="object-none object-left pt-10 text-4xl font-black text-white">
                    Inna Gebrow
                    <h2 className="object-none object-left pt-10 text-base font-black text-white">
                      Are you looking to improve your and joint strength? Then
                      you should get in touch within Inna for a consultation.
                    </h2>
                    <h2 className="object-none object-left pt-5 text-base font-black text-white">
                      A highly trained instructor for both yoga and pilates,
                      Inna can help you better understand your own body, and
                      will help guide you towards your goals in a way that works
                      with your body instead of against it.
                    </h2>
                    <a
                      href="/mas"
                      className=" bg-primary bg-opacity-80 hover:bg-opacity-100 text-white transition duration-200 group text-lg my-4 inline-block py-2 px-16"
                    >
                      Shedule Workout
                    </a>
                  </h1>
                </Link>
              </div>
              <div>
                <Link to="/cardio">
                  <img src={Trainer3} className="w-auto h-auto" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center"></div>
          {/* /End replace */}
        </div>
      </div>

      <div className="bg-white h-full w-full items-center justify-between">
        <h2 className="font-serif font-extrabold text-black text-4xl p-20">
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

export default Trainer;
