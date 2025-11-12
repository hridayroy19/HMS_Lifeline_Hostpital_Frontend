"use client";

import React from "react";
import { Stethoscope, Clock, Truck } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const FeatureCard = ({ icon: Icon, title, subtitle }: FeatureCardProps) => {
  return (
    <div className="flex items-center p-4 bg-success/5 border border-success rounded-xl w-full max-w-md shadow-xl px-7">
      <div className="flex items-center justify-center rounded-full bg-background">
        <Icon className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="ml-7">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-lg text-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-background">
      <div className="section-padding-x mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Why Choose Us
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            We’re more than just a hospital — we’re a{" "}
            <strong>healthcare family</strong> dedicated to providing
            exceptional treatment, compassionate care, and continuous support.
            From emergency services to specialty care, our focus is on
            delivering innovation with a human touch — making your health
            journey safer, comfortable, and more personal.
          </p>

          <a
            href="#"
            className="mt-6 inline-block text-success font-semibold hover:text-foreground transition"
          >
            Click here to know more →
          </a>
        </div>

        {/* Right Feature Cards */}
        <div className="flex flex-col space-y-4 items-center lg:items-end">
          <FeatureCard
            icon={Stethoscope}
            title="500+ Doctors"
            subtitle="Experienced Specialists"
          />

          <FeatureCard
            icon={Clock}
            title="24/7 Emergency Care"
            subtitle="We are always available for you"
          />

          <FeatureCard
            icon={Truck}
            title="Fast Ambulance Service"
            subtitle="Quick response & transportation"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
