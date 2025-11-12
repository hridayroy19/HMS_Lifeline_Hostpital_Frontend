import Banner from "@/containers/home_page/banner/banner";
import DepartmentSection from "@/containers/home_page/department/departmentSection";
import DoctorCardSlider from "@/containers/home_page/doctorCard/doctorCard";
import DoctorFilter from "@/containers/home_page/doctorFilter/DoctorFilter";
import EmergencyCtaSection from "@/containers/home_page/emergencyCta/emergencyCta";
import PatientProfileSection from "@/containers/home_page/patientProfile/patientProfile";
import ResponserLogo from "@/containers/home_page/responser/responser";
import TestimonialSection from "@/containers/home_page/sampleTestimonials/sampleTestimonials";
import WhyChooseUsSection from "@/containers/home_page/whyChooseUs/whyChooseUs";
import { getAllDepartment, getAllResponser } from "@/redux/api/responserApt";

const HomePage = async () => {
  const responser = await getAllResponser();
  const department = await getAllDepartment();

  if (responser instanceof Error) {
    return <div>Error loading responser data...</div>;
  }

  return (
    <div className="section-padding-y">
      <section>
        <Banner />
      </section>
      <section>
        <DoctorFilter />
      </section>
      <section className="section-padding-t">
        <WhyChooseUsSection />
      </section>
      <section className="section-padding-t">
        <EmergencyCtaSection />
      </section>
     
      <section className="section-padding-t">
        <DepartmentSection department={department} />
      </section>
       <section className="section-padding-t">
        <DoctorCardSlider />
      </section>
      <section className="section-padding-t">
        <PatientProfileSection />
      </section>
      <section className="section-padding-t">
        <TestimonialSection />
      </section>
      <section className="section-padding-t">
        <ResponserLogo responser={responser} />
      </section>
    </div>
  );
};

export default HomePage;
