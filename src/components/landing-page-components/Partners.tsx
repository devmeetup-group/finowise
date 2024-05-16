import { FC } from 'react';
import fBN from '../../assets/images/partners/Firstbank.svg';
import flutterwave from '../../assets/images/partners/Flutterwave.svg';
import netflix from '../../assets/images/partners/Netflix.svg';
import piggyvest from '../../assets/images/partners/Piggyvest.svg';

const Partners: FC = () => {
  const partners: Partners = [
    {
      name: 'First Bank of Nigeria',
      image: fBN,
    },
    {
      name: 'Flutterwave',
      image: flutterwave,
    },
    {
      name: 'Netflix',
      image: netflix,
    },
    {
      name: 'Piggyvest',
      image: piggyvest,
    },
  ];

  type Partners = {
    name: string;
    image: string;
  }[];
  return (
    <div className="ml-6 mt-6 flex flex-col space-y-2  rounded-[120px] rounded-r-none bg-gradient-to-b from-fino-green-70/20 via-fino-green-80/20 to-white py-2 lg:py-6 xl:ml-[120px] lg:space-y-6">
      <h2 className="text-md px-6 font-semibold lg:px-20 lg:text-2xl">
        Trusted partners
      </h2>
      <div className="flex flex-wrap items-center justify-between px-6 lg:pl-16 lg:pr-[120px]">
        {partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.image}
            alt={partner.name}
            className="w-2/12 lg:max-w-44"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
