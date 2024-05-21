import Heading2 from '../reusables/Heading2';
import Subscription from './Subscription';

const SubscribeToOurNewsletter = () => {
  return (
    <div className="to-green px-4 md:px-12 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[458px] flex-col space-y-6 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-700 via-black/95 to-black px-6 py-20 lg:w-full lg:max-w-none lg:flex-row lg:items-center lg:space-x-6 lg:px-[120px]">
        <Heading2
          heading="Subscribe to our newsletter"
          className="text-white lg:w-1/2 "
        />
        <div className="flex flex-col space-y-12 lg:w-1/2">
          <p className="max-w-[358px] text-sm leading-5 text-white md:text-base lg:max-w-none xl:text-2xl">
            We design our services with simplicity in mind, ensuring that users
            can navigate and utilize our platform with ease.
          </p>
          <Subscription
            inputClassName="border-none bg-transparent w-full rounded-none"
            btnContainerClassName="right-4 rounded-3xl overflow-hidden"
            className="w-full max-w-[458px] rounded-full bg-white p-4 md:w-full md:max-w-[400px] lg:w-full lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeToOurNewsletter;
