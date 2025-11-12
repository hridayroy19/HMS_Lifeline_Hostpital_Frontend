"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mt-8 font-sans w-full h-96 md:h-[490px] overflow-hidden">
      <Image
        src="https://i.ibb.co.com/67zbPL4D/865a66b57f6e683ad4b6c2ac0b6eb256.jpg"
        alt="Doctor consulting a couple"
        layout="fill"
        objectFit="cover"
        className="-z-15"
      />

      <div className="absolute inset-0 bg-linear-to-r from-success/90 via-success/50 to-transparent z-8"></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-full text-background section-padding-x ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ">
          Caring for You, Every <br />
          Moment
        </h1>

        <p className="max-w-2xl text-lg md:text-xl font-semibold mb-8">
          Access world-class doctors, advanced diagnostics <br />
          and emergency care all in one trusted hospital.
        </p>
        <Button
          variant="secondary"
          className="md:py-6 bg-background md:px-10 hover:font-bold rounded-lg shadow-xl"
        >
          Find Doctor
        </Button>
      </div>
    </div>
  );
};

export default Banner;
