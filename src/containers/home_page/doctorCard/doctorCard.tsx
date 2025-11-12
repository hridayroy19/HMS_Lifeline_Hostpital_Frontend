"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface Doctor {
  id: number;
  name: string;
  department: string;
  degrees: string;
  specialty: string;
  experience: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Farhana Islam",
    department: "Neurology Department",
    degrees: "FCPS(Neurology)",
    specialty: "Neurology",
    experience: "12+ Years",
    image:
      "https://res.cloudinary.com/dsb1inal0/image/upload/v1762942897/image-removebg-preview_1_1_bwpyh0.png",
  },
  {
    id: 2,
    name: "Dr. Nusrat Jahan",
    department: "Gynecology Department",
    degrees: "MBBS, FCPS(OBGYN)",
    specialty: "Gynecology",
    experience: "8+ Years",
    image:
      "https://res.cloudinary.com/dsb1inal0/image/upload/v1762942897/image-removebg-preview_1_1_bwpyh0.png",
  },
  {
    id: 3,
    name: "Dr. Nusrat Jahan",
    department: "Gynecology Department",
    degrees: "MBBS, FCPS(OBGYN)",
    specialty: "Gynecology",
    experience: "8+ Years",
    image:
      "https://res.cloudinary.com/dsb1inal0/image/upload/v1762942889/image-removebg-preview_6_1_alvt6e.png",
  },
  {
    id: 6,
    name: "Dr. Nusrat Jahan",
    department: "Gynecology Department",
    degrees: "MBBS, FCPS(OBGYN)",
    specialty: "Gynecology",
    experience: "8+ Years",
    image:
      "https://res.cloudinary.com/dsb1inal0/image/upload/v1762942889/image-removebg-preview_6_1_alvt6e.png",
  },
];

const DoctorCardSlider = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto section-padding-x">
        <h1 className=" mb-12 text-center">Our Expert Doctors</h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="rounded-lg shadow-[0_8px_10px_-5px_rgba(0,0,0,0.3)] overflow-hidden relative">
                {/* Image Container */}
                <div className="relative h-[260px] w-full bg-foreground/20 overflow-hidden">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Department Badge */}
                <div className="bg-foreground text-center absolute w-[90%] left-1/2 -translate-x-1/2 top-[230px] rounded-t-xl text-primary-foreground px-4 py-3 font-semibold text-lg">
                  {doctor.department}
                </div>

                {/* Card Details */}
                <div className="p-3 mt-4 w-full border border-border rounded-b-xl bg-background shadow-[0_6px_8px_-3px_rgba(0,0,0,0.2)]">
                  <h3 className="text-center text-xl font-bold mt-2 mb-2 text-card-foreground">
                    {doctor.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="bg-success w-[100px] text-background px-2 py-1 rounded text-sm font-semibold shrink-0">
                        Degrees
                      </span>
                      <p className="text-sm text-foreground">
                        {doctor.degrees}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="bg-success w-[100px] text-background px-2 py-1 rounded text-sm font-semibold shrink-0">
                        Specialty
                      </span>
                      <p className="text-sm text-foreground">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="bg-success w-[100px] text-background px-2 py-1 rounded text-sm font-semibold shrink-0">
                        Experience
                      </span>
                      <p className="text-sm text-foreground">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DoctorCardSlider;
