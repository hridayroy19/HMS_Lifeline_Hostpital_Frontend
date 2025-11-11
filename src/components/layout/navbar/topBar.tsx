import { Clock, Phone } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div>
      <section className="bg-success/9 text-foreground text-sm py-3  section-padding-x flex justify-between items-center border-b border-success/20">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="font-semibold text-lg">8 AM – 8 PM</span>
        </div>
        <div className="hidden text-lg md:block">
          For **emergency** care,{" "}
          <span className="text-danger font-bold">contact us</span> immediately
        </div>
        <div className="flex text-lg items-center gap-2">
          <Phone className="w-4 h-4 text-danger" />
          <span className="font-semibold text-danger">+880 1711 000 000</span>
        </div>
      </section>
    </div>
  );
};

export default TopBar;
