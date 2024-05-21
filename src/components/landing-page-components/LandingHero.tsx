import Subscription from './Subscription';
import Clients from './Clients';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import Partners from './Partners';

const LandingHero = () => {
  return (
    <section className="lg:pb-0">
      <div className="items-center justify-between lg:flex">
        <div className="flex flex-col space-y-12 px-6 md:pl-12 lg:w-1/2 lg:space-y-16 lg:pr-0 xl:space-y-24  xl:pl-[120px]">
          <HeroText />
          <Subscription />
          <Clients />
        </div>
        <div className="relative mr-6 flex hidden aspect-[1/1] lg:block lg:w-1/2 xl:mr-[120px]">
          <HeroImage />
        </div>
      </div>
      <Partners />
    </section>
  );
};

export default LandingHero;
