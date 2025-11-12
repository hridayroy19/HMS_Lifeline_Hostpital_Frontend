"use client";

import Image from "next/image";
import React from "react";

interface Logo {
  _id?: string;
  logo: string;
  alt?: string;
  name?: string;
}

const ResponserLogo = ({ responser }: { responser: Logo[] }) => {
  return (
    <section className="bg-background">
      <div className="w-full section-padding-x mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-foreground mb-10">
          Trusted Partners
        </h2>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {responser?.map((logo) => (
            <div key={logo._id} className="w-24 h-20 flex items-center justify-center">
              <Image
                src={logo.logo}
                alt={logo.alt || "logo icon"}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponserLogo;
