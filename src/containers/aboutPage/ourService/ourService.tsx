"use client";

import React from "react";
import Image from "next/image";
import { IService } from "@/types/ourService";

interface OurServiceProps {
  serviceData: IService[];
}

const OurService: React.FC<OurServiceProps> = ({ serviceData }) => {
  return (
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Title Section */}
          <div>
            <p className="text-green-900 font-medium text-2xl heading- mb-2">
              Our Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Providing Excellence <br /> in Healthcare
            </h2>
          </div>

          {/* Right side - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceData.map((service) => (
              <div
                key={service._id}
                className="flex items-center gap-3 bg-green-50 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl px-6 py-5"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={35}
                      height={35}
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.subtitle ?? ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default OurService;
