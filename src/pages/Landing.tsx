import EndlessQualityFeatures from '@/components/landing-page-components/EndlessQualityFeatures';
import GetStartedWithFinowise from '@/components/reusables/GetStartedWithFinowise';
import LandingHero from '@/components/landing-page-components/LandingHero';
import LetsHelpSetUpYourAccount from '@/components/reusables/LetsHelpSetUpYourAccount';
import SecureFinancialManagement from '@/components/landing-page-components/SecureFinancialManagement';
import SubscribeToOurNewsletter from '@/components/landing-page-components/SubscribeToOurNewsletter';
import TransfromYourBankingJourney from '@/components/reusables/TransfromYourBankingJourney';
import WhyBankWithFinowise from '@/components/landing-page-components/WhyBankWithFinowise';

const Landing = () => {
  return (
    <main className="overflow-hidden px-4 py-6 md:px-12 xl:px-[7.5rem]">
      <LandingHero />
      <WhyBankWithFinowise />
      <SecureFinancialManagement />
      <EndlessQualityFeatures />
      <TransfromYourBankingJourney variant='home'/>
      <LetsHelpSetUpYourAccount />
      <GetStartedWithFinowise />
      <SubscribeToOurNewsletter />
    </main>
  );
};

export default Landing;
