"use client";
import Image from "next/image";
import { Phone } from "lucide-react";

const EmergencyCtaSection = () => {
  return (
   <div className="w-full mx-auto justify-center">
     <section className="relative w-full py-20 shadow-xl overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co.com/67zbPL4D/865a66b57f6e683ad4b6c2ac0b6eb256.jpg"
          alt="Emergency room background"
          layout="fill"
          objectFit="cover"
          className="opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-success/20 opacity-40"></div>{" "}
      </div>

      <div className="relative z-10 mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Need <span className="text-danger">Emergency Care</span> Right Now?
          <span className="text-danger"> Call 10636</span>
        </h1>

        <p className="text-base md:text-lg text-foreground mb-8">
          You can also visit our Emergency Department directly at: <br />
          <span className="font-semibold">
            Lifeline Hospital, Dhanmondi, Dhaka, Bangladesh.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-danger text-background font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-danger transition duration-300 transform hover:scale-105">
            Call Helpline
          </button>
          <button className="bg-background text-success font-semibold py-3 px-8 rounded-lg border border-success shadow-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
        <a
          href="tel:10636"
          aria-label="Call emergency number"
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-success/90 rounded-full shadow-lg hover:bg-success transition-colors duration-300"
        >
          <Phone className="w-8 h-8 md:w-10 md:h-10 text-background" />
        </a>
      </div>
    </section>
   </div>
  );
};

export default EmergencyCtaSection;
