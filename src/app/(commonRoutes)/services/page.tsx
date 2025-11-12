import ServicePage from "@/containers/service_page/servicePage";
import getAllHealthPackages from "@/redux/api/healthPackageApi";

const servicePage = async() => {
  const healthPackageData = await getAllHealthPackages()
  return  <div className="max-content-width section-padding-x">
        <section className="section-padding-t ">
          <ServicePage healthPackages={healthPackageData} />
        </section>
    
  </div>;
};

export default servicePage;
