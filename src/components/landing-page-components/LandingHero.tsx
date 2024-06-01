import Subscription from './Subscription';
import Clients from './Clients';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import Partners from './Partners';
import { LayoutGrid2 } from '../reusables';

const LandingHero = () => {
  return (
    <section className="my-10 py-10 md:my-24 ">
      <LayoutGrid2 className="items-center md:grid-cols-[58%_42%] md:gap-2 lg:gap-6">
        <div className="space-y-6 pt-2 lg:space-y-12">
          <HeroText />
          <Subscription className="md:w-full lg:w-4/5" />
          <Clients />
        </div>

        <div className="relative aspect-square md:block md:w-full">
          <HeroImage />
        </div>
      </LayoutGrid2>

      <Partners />
    </section>
  );
};

export default LandingHero;
