"use client";

import doctorImg from "@/assets/images/about/doctor-2.png";
import { Users } from "lucide-react";
import Image from "next/image";

export default function WhyTrust() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* parent grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
          {/* Left Side (Doctor Image) */}
          <div className="relative h-full flex items-center">
            <div className="relative w-full h-[420px] lg:h-[450px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={doctorImg}
                alt="Doctors"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right Side (Content) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-green-900 mb-5">
              Why Patients Trust Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {/* Item 1 */}
              <div className="flex flex-col items-start gap-4">
                <div className="">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shadow-sm">
                    <Users size={22} className="text-green-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Skilled & Experienced Team
                  </h3>
                  <p className="mt-2 text-md text-gray-600 leading-relaxed">
                    Our doctors, nurses, and healthcare professionals bring years of
                    experience and a commitment to delivering top-quality care to every patient.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-start gap-4">
                <div className="">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shadow-sm">
                    <Users size={22} className="text-green-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Wide-Ranging Healthcare Services
                  </h3>
                  <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                    From routine check-ups to specialized treatments for complex medical
                    conditions, we offer a full spectrum of healthcare solutions under one roof.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-start gap-4">
                <div className="">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shadow-sm">
                    <Users size={22} className="text-green-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Personalized Patient Care
                  </h3>
                  <p className="mt-2 text-md text-gray-600 leading-relaxed">
                    Every patient is unique. We listen carefully, understand your needs,
                    and create tailored care plans to ensure the best outcomes.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-start gap-4">
                <div className="">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shadow-sm">
                    <Users size={22} className="text-green-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cutting-Edge Facilities
                  </h3>
                  <p className="mt-2 text-md text-gray-600 leading-relaxed">
                    Our hospital is equipped with the latest technology and modern medical
                    equipment, enabling us to provide advanced diagnostics and treatments
                    with precision and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
