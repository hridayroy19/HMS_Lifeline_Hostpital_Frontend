import Banner from "@/containers/home_page/banner/banner";
import WhyChooseUsSection from "@/containers/home_page/whyChooseUs/whyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <div className="section-padding-y">
      <section>
        <Banner />
      </section>
      <section>
      <WhyChooseUsSection/>
      </section>
    </div>
  );
};

export default HomePage;
