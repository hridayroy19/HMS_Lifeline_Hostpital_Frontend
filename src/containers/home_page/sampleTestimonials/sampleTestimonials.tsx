"use client";

import React from "react";
import { User } from "lucide-react";
import TesimonialsHeader from "./tesimonialsHeader";

// Testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
}

const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Shazia Rahman",
    role: "Patient",
    testimonial:
      "I had a heart condition that required urgent care. The cardiology department at Lifeline Hospital handled my case with such professionalism and compassion. The doctors explained everything clearly and made me feel safe throughout my treatment.",
  },
  {
    id: 2,
    name: "Mrs. Shazia Rahman",
    role: "Patient",
    testimonial:
      "I had a heart condition that required urgent care. The cardiology department at Lifeline Hospital handled my case with such professionalism and compassion. The doctors explained everything clearly and made me feel safe throughout my treatment.",
  },
  {
    id: 3,
    name: "Mrs. Shazia Rahman",
    role: "Patient",
    testimonial:
      "I had a heart condition that required urgent care. The cardiology department at Lifeline Hospital handled my case with such professionalism and compassion. The doctors explained everything clearly and made me feel safe throughout my treatment.",
  },
];

const TestimonialSection: React.FC<{ testimonials?: Testimonial[] }> = ({
  testimonials = sampleTestimonials,
}) => {
  return (
    <section className=" w-full mx-auto bg-background ">
      <div className="section-padding-x mx-auto">
        <TesimonialsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-success/10 p-6 rounded-xl border border-border shadow-lg flex flex-col h-full hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-success/80 rounded-full flex items-center justify-center mr-3">
                  <User className="w-9 h-9 text-background" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-lg font-medium text-success">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {item.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
