import Image, { StaticImageData } from 'next/image';

import img1 from "@/assets/images/about/Rectangle 20.png";
import img2 from "@/assets/images/about/Rectangle 21.png";
import img3 from "@/assets/images/about/Rectangle 22.png";
import img4 from "@/assets/images/about/Rectangle 23.png";
import img5 from "@/assets/images/about/Rectangle 24.png";
import img6 from "@/assets/images/about/Rectangle 25.png";
import React from 'react';


interface ImageCardProps {
  imgData: StaticImageData; 
  alt: string;
  priority?: boolean;       
  className?: string;      
}

const ImageCard: React.FC<ImageCardProps> = ({
  imgData,
  alt,
  priority = false,
  className = "",
}) => (
  <div className={`overflow-hidden rounded-xl  ${className}`}>
    <Image
      src={imgData} 
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      priority={priority} 
      className="w-full h-full object-cover" 
    />
  </div>
);


const InfrastructureSection = () => {
  const title = <>Our Infrastructure & Innovations</>;

  return (
    <div className=" mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        <div className="md:col-span-1 flex items-center min-h-[100px] md:min-h-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
            {title}
          </h2>
        </div>

        <ImageCard
          imgData={img1} 
          alt="Modern operating room"
          className="md:col-span-2 md:row-span-2"
          priority={true} 
        />

    
        <div className=" md:col-span-1 grid grid-cols-2 gap-4 md:gap-6">
          <ImageCard
            imgData={img2} 
            alt="Operating room in use"
          />
          <ImageCard
            imgData={img3} 
            alt="Patient monitor"
          />
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <ImageCard
            imgData={img4} 
            alt="Surgeons preparing"
          />
          <ImageCard
            imgData={img5} 
            alt="Medical equipment monitor"
          />
          <ImageCard
            imgData={img6}
            alt="Medical laboratory"
          />
        </div>
        
      </div>
    </div>
  );
};

export default InfrastructureSection;