import React from 'react';
import H2 from '../reusables/text/H2';
import { BoldText, LayoutGrid2 } from '../reusables';
import setupImg from '../../assets/images/dashboard/dashboard-setup.png';

const setupDetails = [
  {
    title: 'Sign up your account',
    description: 'Sign up using your email, mobile number',
  },
  {
    title: 'Set up account ',
    description:
      'Set up your account username, password, ID verification and a PIN',
  },
  {
    title: 'Confirm verification ',
    description: 'Verify email, while mobile number using OTP.',
  },
  {
    title: ' You’re all set!',
    description: 'Login to your dashboard and start your journey with Finowise',
  },
];

function Setup() {
  return (
    <div>
      <H2 className="mb-16 text-center">{'Let’s'} help set up your account</H2>
      <LayoutGrid2>
        <div className="flex items-center justify-center">
          <img
            src={setupImg}
            alt="an image of a monitor showing finowise dashboard "
          />
        </div>
        <ul className="space-y-6">
          {setupDetails.map((detail, i) => {
            return (
              <li className="grid grid-cols-[1fr_4fr] gap-4" key={i}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-fino-green-70 to-white">
                  <BoldText className="text-black">{`0${i + 1}`}</BoldText>
                </div>
                <div className="space-y-4">
                  <BoldText className="text-black">{detail.title}</BoldText>
                  <p className="font-Urbanist text-base text-black md:text-2xl">
                    {detail.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </LayoutGrid2>
    </div>
  );
}

export default Setup;
