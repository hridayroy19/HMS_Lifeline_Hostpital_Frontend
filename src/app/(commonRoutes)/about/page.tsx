import HeroSection from '@/containers/aboutPage/banner/heroSection/heroSection';
import InfrastructureSection from '@/containers/aboutPage/infrastructure/infrastructure';
import OurService from '@/containers/aboutPage/ourService/ourService';
import WhyTrust from '@/containers/aboutPage/whyTrust/whyTrust';
import getOurServices from '@/redux/api/ourServiceApi';

const page = async() => {
     const serviceData = await getOurServices()

    return (
        <div className='section-padding-y'>
          <HeroSection />
          <section className='section-padding-t section-padding-x'>
          <OurService  serviceData={serviceData}/>
          </section>
          <section className='section-padding-t section-padding-x'>
         <WhyTrust />
          </section>
         <section className='section-padding-t section-padding-x'>
          <InfrastructureSection />
          </section>
        </div>
    );
};

export default page;