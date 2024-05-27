import clock from '../../assets/images/endless_quality_features/clock.svg';
import bill from '../../assets/images/endless_quality_features/bill.svg';
import support from '../../assets/images/endless_quality_features/support.svg';
import mobile from '../../assets/images/endless_quality_features/mobile.svg';
import Heading2 from '../reusables/Heading2';
import Heading2Description from '../reusables/Heading2Description';
import Heading3 from '../reusables/Heading3';
import { cn } from '@/lib/utils';

const data = [
  {
    icon: clock,
    title: 'Real-time Analytics',
    description:
      'This benefit offers users real-time insights into their finances through interactive graphs and charts, enabling informed, proactive financial goal management.',
    bgColor: 'bg-fino-blue-70',
  },
  {
    icon: bill,
    title: 'Easy Fund Transfers',
    description:
      'This feature streamlines fund transfers between accounts, making it easy for users to send money to friends, family, or other accounts, saving time and effort in financial transactions.',
    bgColor: 'bg-fino-orange',
  },
  {
    icon: support,
    title: 'Customer Support',
    description:
      'This feature provides responsive customer support, ensuring users get timely and helpful assistance with inquiries, technical issues, or guidance.',
    bgColor: 'bg-fino-purple',
  },
  {
    icon: mobile,
    title: 'Mobile App Integration',
    description:
      'The dedicated mobile app empowers users to manage finances, make transactions, track investments, and receive real-time updates on the go, enhancing control and accessibility.',
    bgColor: 'bg-fino-yellow',
  },
];

const EndlessQualityFeatures = () => {
  return (
    <section className="flex flex-col space-y-6 px-6 md:px-12 xl:px-[120px]">
      <div className="mb-6 flex flex-col space-y-2 lg:mb-12 lg:space-y-4">
        <Heading2
          heading="Endless quality features Finowise offers"
          className="text-center"
        />
        <Heading2Description
          text="Finowise offers seamless, smooth transactions and financial security"
          className=""
        />
      </div>
      <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:flex-row lg:gap-6 lg:space-y-0">
        {data.map((data) => (
          <div
            className={`${data.bgColor} mx-auto flex aspect-square w-full max-w-[358px] flex-col space-y-4 rounded-[24px] p-6 lg:max-w-[589px] lg:space-y-10 xl:aspect-[3/2.5]`}
            key={data.title}
          >
            <div className="grid aspect-square w-11 place-content-center rounded-lg bg-white lg:w-[20%]">
              <img
                src={data.icon}
                alt=""
                className={cn(
                  'w-6 lg:w-12 xl:w-16',
                  data.icon === mobile ? 'lg:w-8 xl:w-12' : '',
                )}
              />
            </div>

            <div className="flex flex-col space-y-6 lg:space-y-10">
              <Heading3 heading={data.title} className="" />
              <p className="font-Urbanist text-sm leading-5 text-white lg:text-xl">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndlessQualityFeatures;
