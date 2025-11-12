"use client";

import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

import avatar1 from "@/assets/images/about/avatar-1.png";
import avatar2 from "@/assets/images/about/avatar-2.png";
import avatar3 from "@/assets/images/about/avatar-3.png";
import avatar4 from "@/assets/images/about/avatar-4.png";
import doctorImg from "@/assets/images/about/doctor.png";
import waveLarge from "@/assets/images/about/wave-large.png";
import waveSmall from "@/assets/images/about/wave-small.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-visible">
      {/* BIG WAVE */}
      <div className="absolute inset-x-0 top-0 h-80 sm:h-[380px] md:h-[520px] lg:h-[620px] -z-20">
        <Image
          src={waveLarge}
          alt="wave large"
          fill
          style={{ objectFit: "cover", objectPosition: "right top" }}
          priority
        />
      </div>

      {/* SMALLWAVE */}
      <div className="absolute inset-x-0 top-0 h-20 sm:h-28 md:h-32 -z-10">
        <Image
          src={waveSmall}
          alt="wave small"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 pt-12 md:pt-16 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* LEFT - Image area */}
          <div className="relative w-full md:w-[48%] flex justify-center md:justify-start overflow-visible">
            <div className="relative -left-20 w-[185px] sm:w-[230px] md:w-[310px] lg:w-[380px]">
              <Image
                src={doctorImg}
                alt="Doctor"
                width={560}
                height={760}
                className="relative z-20"
                priority
              />

              <div
                className={
                  "absolute z-40 flex items-center gap-2 px-3 py-1 shadow-md rounded-lg " +
                  "bg-white/95 text-foreground" +
                  "left-[70%] top-[15%] " +
                  "sm:left-[4%] sm:top-[-6%] " +
                  "md:left-[70%] md:top-[12%]"
                }
                style={{ minWidth: 140 }}
              >
                <span className="text-sm font-medium pl-1">120+ Doctors</span>
                <div className="flex -space-x-2 pr-1">
                  {[avatar1, avatar2, avatar3, avatar4].map((img, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 overflow-hidden border border-white"
                    >
                      <Image src={img} alt={`a${idx}`} width={28} height={28} />
                    </div>
                  ))}
                </div>
              </div>

                      
              <div
                className={
                  "absolute -z-30 flex flex-col items-center bg-white rounded-xl shadow-lg p-2 " +
                  "right-[-65%] top-[50%] w-[140px] " +
                  "sm:right-[4%] sm:top-[-6%] sm:w-[170px] " +
                  "md:left-[80%] md:bottom-[8%] md:top-auto md:right-auto md:w-[150px] lg-[w-[250px]]"
                }
                style={{ background: "rgba(255,255,255,0.98)" }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-green-700 flex items-center justify-center mb-2 shadow-sm border border-white/60">
                  <User className="w-5 h-5 text-white" />
                </div>

                <h4 className="text-xs sm:text-[16px] font-semibold text-background text-center">
                  24 Hour Doctors
                </h4>
                <p className="text-xs text-muted-foreground text-center mt-1">can help your needs</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Text area */}
          <div className="w-full hidden md:flex md:w-[48%] mt-8 md:mt-0">
            <div className="text-center md:text-right">
              <h1 className="  text-foreground">
                Compassionate Care
                <br />
                Advanced Medicine
              </h1>
              <p className="mt-4 sm:mt-5 text-foreground sm:text-lg md:text-xl font-medium">
                Highly qualified specialists across all major medical disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
