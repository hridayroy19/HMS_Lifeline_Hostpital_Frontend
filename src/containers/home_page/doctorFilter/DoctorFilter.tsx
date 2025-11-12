"use client";

import { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  specialization: string;
  day: string;
  time: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    specialization: "Consultant Cardiologist",
    day: "Monday",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Dr. Hridoy Chandra Roy",
    specialization: "Consultant Cardiologist",
    day: "Wednesday",
    time: "12:00 PM",
  },
  {
    id: 3,
    name: "Dr. Sumon Dev",
    specialization: "Consultant Cardiologist",
    day: "Friday",
    time: "3:00 PM",
  },
];

export default function DoctorFilter() {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const filteredDoctors = doctors.filter(
    (d) =>
      (!selectedSpecialization ||
        d.specialization === selectedSpecialization) &&
      (!selectedDoctor || d.name === selectedDoctor) &&
      (!selectedDay || d.day === selectedDay) &&
      (!selectedTime || d.time === selectedTime)
  );

  const unique = (key: keyof Doctor) =>
    Array.from(new Set(doctors.map((d) => d[key])));

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-10">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center">
        {/* Specialization */}
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="w-full h-12 text-lg border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-foreground focus:outline-none"
        >
          <option value="">Select Specialization</option>
          {unique("specialization").map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Doctor */}
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="w-full h-12 text-lg border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-green-800 focus:outline-none"
        >
          <option value="">Select Doctor</option>
          {unique("name").map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        {/* Day */}
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="w-full h-12 text-lg border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-green-800 focus:outline-none"
        >
          <option value="">Select Day</option>
          {unique("day").map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Time */}
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full h-12 text-lg border border-gray-300 rounded-md px-4 focus:ring-2 focus:ring-green-800 focus:outline-none"
        >
          <option value="">Select Time</option>
          {unique("time").map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl shadow-lg overflow-hidden">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-foreground hover:bg-foreground text-background">
              <th className="w-1/2 text-xl py-4 font-bold align-middle text-center">
                Doctor’s Name
              </th>
              <th className="w-1/2 text-xl py-4 font-bold align-middle text-center">
                Speciality
              </th>
            </tr>
          </thead>

          {/* Body - NO BORDERS */}
          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="bg-foreground/10 hover:bg-foreground/20 transition duration-150 ease-in-out"
              >
                <td className="py-5 text-xl text-foreground font-medium align-middle text-center">
                  {doctor.name}
                </td>
                <td className="py-5 text-xl text-foreground align-middle text-center">
                  {doctor.specialization}
                </td>
              </tr>
            ))}

            {filteredDoctors.length === 0 && (
              <tr>
                <td
                  colSpan={2}
                  className="text-center text-foreground py-6 align-middle bg-background"
                >
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
