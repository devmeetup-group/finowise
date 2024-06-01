import Heading2 from './text/Heading2';
import Heading3 from './text/Heading3';
import { Button } from '../ui/button';
import LayoutGrid2 from './LayoutGrid2';
import LetsHelpYouSetUpYourAccountImage from './LetsHelpYouSetUpYourAccountImage';
import BoldText from './text/BoldText';
import Paragraph from './text/Paragraph';

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
    <section className="py-14">
      <Heading2 className="mb-12 text-center lg:mb-12">
        Let's set up your account
      </Heading2>
      <LayoutGrid2 className="items-center gap-0">
        {/* ------- IMAGE -------- */}
        <LetsHelpYouSetUpYourAccountImage />
        {/* ------TEXT ------- */}
        <div className="mx-auto w-full space-y-4 rounded-[24px] lg:mx-0 lg:space-y-6">
          {accountSetupSteps.map((step) => (
            <div className="flex space-x-6 md:space-x-8">
              <div className="w-16">
                <p className="grid aspect-square w-16 place-content-center rounded-full bg-gradient-to-b from-fino-green-80 to-white font-Urbanist text-2xl font-bold text-black">
                  {step.id}
                </p>
              </div>
              <div className="flex w-4/5 flex-col space-y-2">
                <BoldText className="text-black">{step.title}</BoldText>
                <Paragraph>{step.action}</Paragraph>
              </div>
            </div>
          ))}
          <div className="ml-16 pl-6">
            <Button variant="default" className="mt-12 w-fit" size="default">
              Create account
            </Button>
          </div>
        </div>
      </LayoutGrid2>
    </section>
  );
};

export default LetsHelpSetUpYourAccount;
