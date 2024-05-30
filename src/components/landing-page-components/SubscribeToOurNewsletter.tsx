import { LayoutGrid2 } from '../reusables';
import Heading2 from '../reusables/Heading2';
import Subscription from './Subscription';

const SubscribeToOurNewsletter = () => {
  return (
    <div className="py-14">
      <LayoutGrid2 className="mx-auto gap-6 w-full max-w-[458px] space-y-6 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-700 via-black/95 to-black px-6 py-20 lg:w-full lg:max-w-4xl xl:max-w-5xl lg:items-center  md:px-12">
        <Heading2 className="text-white">
          Subscribe to our newsletter
        </Heading2>
        <div className="space-y-12">
          <p className="max-w-[358px] text-base leading-5 text-white md:text-xl lg:max-w-none xl:text-2xl">
            We design our services with simplicity in mind, ensuring that users
            can navigate and utilize our platform with ease.
          </p>
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
