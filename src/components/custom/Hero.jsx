import React from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        Descubre tu proximo viaje con AI:
        <span className="text-[#f56551]">
          itinerarios personalizados al alcance de su mano
        </span>
      </h1>

      <p className="text-xl text-gray-500 text-center">
        su planificador personal de tríos y curador de viajes, que crea
        itinerarios personalizados adaptados a sus intereses y presupuesto
      </p>
      <Link to={"/create-trip"}>
        <Button> Get Stared , It for FREE</Button>
      </Link>
    </div>
  );
}

export default Hero;
