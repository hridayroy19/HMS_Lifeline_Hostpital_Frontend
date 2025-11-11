import Banner from "@/containers/home_page/banner/banner";
import EmergencyCtaSection from "@/containers/home_page/emergencyCta/emergencyCta";
import PatientProfileSection from "@/containers/home_page/patientProfile/patientProfile";
import WhyChooseUsSection from "@/containers/home_page/whyChooseUs/whyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <div className="section-padding-y">
      <section>
        <Banner />
      </section>
      <section>
        <WhyChooseUsSection />
      </section>
      <section className="section-padding-t">
        <EmergencyCtaSection />
      </section>
      <section className="section-padding-t">
        <PatientProfileSection />
      </section>
    </div>
  );
};

export default HomePage;
