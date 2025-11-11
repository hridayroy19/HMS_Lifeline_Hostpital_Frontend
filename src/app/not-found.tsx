"use client";

import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="https://i.ibb.co.com/5hDNdRS1/404-darkc.png"
            alt="Lost Astronaut"
            width={350}
            height={350}
            className="drop-shadow-lg"
          />
          {/* <p className="text-white text-3xl md:text-4xl font-bold mt-6">
            YES, LOSTT!!
          </p> */}
        </div>
        <Link href="/" passHref>
          <button className=" px-6 py-3 rounded-lg bg-background text-foreground font-semibold shadow-md hover:bg-gray-200 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
