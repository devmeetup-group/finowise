import Heading2 from '../reusables/Heading2';
import Heading3 from '../reusables/Heading3';
import { Button } from '../ui/button';
import LetsHelpYouSetUpYourAccountImage from './LetsHelpYouSetUpYourAccountImage';

const accountSetupSteps = [
  {
    id: 1,
    title: 'Sign up your account',
    action: 'Sign up using email, mobile number.',
  },
  {
    id: 2,
    title: 'Setup up account',
    action:
      'Set up your account username, password, ID verification and a PIN.',
  },
  {
    id: 3,
    title: 'Confirm Verification',
    action: 'Verify email, while mobile number using OTP.',
  },
  {
    id: 4,
    title: 'You are all set!',
    action: 'Login to your dashboard and start your journey with Finowise.',
  },
];

const LetsHelpSetUpYourAccount = () => {
  return (
    <section className="relative px-6 md:px-12 lg:space-x-6 lg:space-y-0 xl:px-[120px]">
      <Heading2
        className="mb-6 text-center lg:mb-12"
        heading="Let's set up your account"
      />
      <div className="flex flex-col space-y-6 lg:flex-row lg:items-center lg:justify-between">
        {/* ------- IMAGE -------- */}
        <LetsHelpYouSetUpYourAccountImage />
        {/* ------TEXT ------- */}
        <div className="mx-auto flex w-full max-w-[358px] flex-col space-y-4 rounded-[24px] lg:mx-0 lg:w-1/2 lg:max-w-[589px] lg:space-y-10">
          {accountSetupSteps.map((step) => (
            <div className="flex items-center space-x-6">
              <div className="w-16">
                <p className="grid aspect-square w-16 place-content-center rounded-full bg-gradient-to-b from-fino-green-80 to-white font-Urbanist text-2xl text-black">
                  {step.id}
                </p>
              </div>
              <div className="flex w-4/5 flex-col space-y-2">
                <Heading3 heading={step.title} className="text-black" />
                <p className="font-Urbanist text-sm lg:text-xl">
                  {step.action}
                </p>
              </div>
            </div>
          ))}
          <div className="pl-[20%]">
            <Button variant="default" className="mt-12 w-fit" size="default">
              Create account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsHelpSetUpYourAccount;
