"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import DepartmentHeader from "./departmentHeader";

export interface Department {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
}

export default function DepartmentSection({
  department,
}: {
  department: Department[];
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-background ">
      <div className="w-full mx-auto section-padding-x">
        <DepartmentHeader />
        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {department.map((dept) => {
            const isHovered = hoveredId === dept.id;

            return (
              <Card
                key={dept.id}
                onMouseEnter={() => setHoveredId(dept.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative h-56  overflow-hidden flex flex-col items-center justify-center rounded-2xl border border-border bg-success/10 shadow-sm cursor-pointer transition-all duration-500 ease-out
                  ${isHovered ? "scale-[1.03] shadow-md" : "hover:shadow-md"}
                `}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isHovered ? "opacity-70" : "opacity-0"
                  }`}
                >
                  <Image
                    src={dept.hoverImage}
                    alt={dept.name}
                    fill
                    className={`object-cover text-foreground rounded-2xl   ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-success via-success/70 to-success/30 rounded-2xl"></div>
                </div>

                {/* Content */}
                <CardContent className="relative z-10 flex flex-col items-center text-center space-y-4 transition-colors duration-500">
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    width={120}
                    height={80}
                    className={`object-contain transition-transform duration-500 ${
                      isHovered ? "brightness-0 " : ""
                    }`}
                  />
                  <h3
                    className={`md:text-4xl text-xl font-semibold transition-colors duration-500 ${
                      isHovered ? "text-background" : "text-foreground"
                    }`}
                  >
                    {dept.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
