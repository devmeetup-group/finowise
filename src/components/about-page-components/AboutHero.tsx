import { LayoutGrid2 } from '../reusables';
import HeadingOne from '../reusables/text/HeadingOne';
import Paragraph from '../reusables/text/Paragraph';
import { Button } from '../ui/button';
import customerService from '../../assets/images/about_page/customer_service.png';

const AboutHero = () => {
  return (
    <section className="my-10 py-10 md:my-24 ">
      <LayoutGrid2 className="items-center gap-6">
        <div className="space-y-8 md:space-y-14">
          <HeadingOne>
            Serving the financial goals of every individual
          </HeadingOne>
          <Paragraph>
            Finowise revolutionizes daily financial interactions with
            lightning-fast, dependable transactions. Our user-friendly dashboard
            simplifies activities, from transactions to wallet management,
            ensuring remarkable experiences for businesses and individuals
          </Paragraph>
          <Button variant="secondary" className="font-semibold">
            Log in
          </Button>
        </div>
        <div className="relative max-w-[390px] lg:max-w-none mx-auto grid w-full lg:mx-0">
          <img
            src={customerService}
            alt="Finowise staff rendering virtual assistance to a user"
            className="lg:justify-self-end w-full lg:w-4/5"
          />
        </div>
      </LayoutGrid2>
    </section>
  );
};

export default AboutHero;
