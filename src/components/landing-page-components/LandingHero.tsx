import Subscription from './Subscription';
import Clients from './Clients';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import Partners from './Partners';
import { LayoutGrid2 } from '../reusables';

const LandingHero = () => {
  return (
    <section className="my-10 py-10 md:my-24 ">
      <LayoutGrid2>
        <div className='space-y-6 lg:space-y-12'>
          <HeroText />
          <Subscription />
          <Clients />
        </div>
        <div className="relative hidden lg:block">
          <HeroImage />
        </div>
      </LayoutGrid2>
      <Partners />
    </section>
  );
};

export default LandingHero;
