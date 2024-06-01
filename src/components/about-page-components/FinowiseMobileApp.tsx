import { LayoutGrid2 } from '../reusables';
import Heading2 from '../reusables/text/Heading2';
import Paragraph from '../reusables/text/Paragraph';
import background from '../../assets/images/about_page/green_background.png';
import mockup from '../../assets/images/about_page/iPhone_15.png';

const FinowiseMobileApp = () => {
  return (
    <section className="py-14">
      <LayoutGrid2 className="items-center gap-6">
        <div className="space-y-4 lg:space-y-14">
          <Heading2>Introducing finowise mobile web app</Heading2>
          <Paragraph>
            The mobile website application is made a responsive version of the
            PC version to enable Finowise users have a smooth, secure and
            reliable transactions seamlessly, at their desired convenience.
          </Paragraph>
        </div>

        <div className="relative mx-auto w-full max-w-[390px] justify-self-end lg:mx-0 lg:w-4/5 lg:max-w-none">
          <img
            src={background}
            alt="Mockup of Finowise mobile app"
            className="w-full"
          />
          <img
            src={mockup}
            alt="Mockup of Finowise mobile app"
            className="absolute top-0 h-full"
          />
        </div>
      </LayoutGrid2>
    </section>
  );
};

export default FinowiseMobileApp;
