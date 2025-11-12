"use client";

import Image from "next/image";
import { Clock, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const PatientProfileSection = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
        <div className="relative section-padding-x py-10 bg-success/10">
          <div className="absolute inset-0">
            <Image
              src="https://i.ibb.co/67zbPL4D/865a66b57f6e683ad4b6c2ac0b6eb256.jpg"
              alt="Doctor consulting patient"
              fill
              className="object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Start Your Patient Profile
            </h2>

            <p className="text-lg text-foreground mt-4">
              Find the right specialist, choose your preferred date and time,
              and confirm your visit instantly.
            </p>

            <div className="flex items-center text-foreground mt-4">
              <Clock className="w-5 h-5 mr-2 text-success" />
              <p>Appointments available 9 AM – 9 PM daily</p>
            </div>

            <div className="flex items-center text-danger mt-2">
              <PhoneCall className="w-5 h-5 mr-2" />
              <p className="font-semibold">
                For emergencies, please call 10636 instead.
              </p>
            </div>
          </div>
        </div>

        <div className="section-padding-x py-10 bg-success/15 flex items-center justify-center">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-foreground"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full py-2 border border-foreground rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xl font-semibold text-foreground"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full py-2 border border-foreground rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xl font-semibold text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 border border-foreground rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-xl font-semibold text-foreground"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full py-2 border border-foreground rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              />
            </div>
            <div className="flex justify-end items-end mt-4 w-full">
              <Button className=" px-10">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PatientProfileSection;
