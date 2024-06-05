import { LayoutGrid2 } from '../reusables';
import Heading2 from '../reusables/text/Heading2';
import Paragraph from '../reusables/text/Paragraph';
import Subscription from './Subscription';

const SubscribeToOurNewsletter = () => {
  return (
    <div className="py-14">
      <LayoutGrid2 className="mx-auto w-full max-w-[458px] gap-6 space-y-6 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-700 via-black/95 to-black px-6 py-20 md:px-12 lg:w-full lg:max-w-4xl lg:items-center  xl:max-w-5xl">
        <Heading2 className="text-white">Subscribe to our newsletter</Heading2>
        <div className="space-y-12">
          <Paragraph className="max-w-[358px] text-white lg:max-w-none">
            We design our services with simplicity in mind, ensuring that users
            can navigate and utilize our platform with ease.
          </Paragraph>
          <Subscription
            inputClassName="border-none bg-transparent w-full rounded-none"
            btnContainerClassName="right-4 top-1/2 -translate-y-1/2 rounded-3xl overflow-hidden"
            className="w-full max-w-[458px] rounded-full bg-white p-4 md:w-full md:max-w-[400px] lg:w-full lg:max-w-none"
          />
        </div>
      </LayoutGrid2>
    </div>
  );
};

export default SubscribeToOurNewsletter;
