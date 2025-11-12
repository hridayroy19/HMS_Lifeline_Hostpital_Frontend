"use client";

import { IHealthPackage } from "@/types/healthPackage";
import React from "react";
import HeallthPackageHeader from "./_heallthPackageHeader";

interface Props {
  healthPackages: IHealthPackage[];
}

const ServicePage: React.FC<Props> = ({ healthPackages }) => {
  if (!healthPackages || healthPackages.length === 0) {
    return <div className="text-center py-12 muted">No packages available.</div>;
  }

  return (
    <>
      <HeallthPackageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {healthPackages.map((pkg) => (
          <article
            key={pkg._id}
            className="bg-[#f3faf3] border border-[#b8cbb0] rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="bg-[#173c26] text-white px-6 py-3 rounded-t-2xl text-center font-semibold text-xl tracking-wide">
              {pkg.packageName}
            </div>

            {/* Table Section */}
            <div className="relative bg-[#e8f5e8]">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#c2d9c2] z-0"></div>

              {/* Table Header */}
              <div className="grid grid-cols-2 bg-[#2fb159] text-white font-semibold text-lg text-center relative z-10">
                <div className="py-3 border-r border-white">Test / Service</div>
                <div className="py-3">Price (BDT)</div>
              </div>

              {/* Table Body */}
              <div className="relative z-10 text-center flex flex-col ">
                {pkg.tests.map((t, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 border-b border-[#c2d9c2] last:border-none"
                  >
                    <div className="py-3 pl-6 text-[17px] text-[#133c1c] text-left">
                      {t.name}
                    </div>
                    <div className="py-3 pr-6 text-[17px] text-[#133c1c] text-right">
                      {Number(t.price).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals Section */}
            <div className="relative bg-[#173c26] text-white text-[17px]">
              <div className="absolute left-1/2 top-0 bottom-0 w-1px bg-[#0d2a18] z-0"></div>

              <div className="grid grid-cols-2 border-t border-[#173c26] relative z-10">
                <div className="py-3 pl-6 font-medium border-r border-[#0d2a18]">
                  Total Cost
                </div>
                <div className="py-3 pr-6 text-right font-medium">
                  BDT{" "}
                  {Number(pkg.totalCost).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-[#0d2a18] relative z-10">
                <div className="py-3 pl-6 font-medium border-r border-[#0d2a18]">
                  Discounted Price
                </div>
                <div className="py-3 pr-6 text-right font-medium">
                  BDT{" "}
                  {Number(pkg.discountedPrice).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ServicePage;
