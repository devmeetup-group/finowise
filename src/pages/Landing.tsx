import EndlessQualityFeatures from '@/components/landing-page-components/EndlessQualityFeatures';
import FeaturesAndBenefits from '@/components/landing-page-components/FeaturesAndBenefits';
import GetStartedWithFinowise from '@/components/reusables/GetStartedWithFinowise';
import LandingHero from '@/components/landing-page-components/LandingHero';
import LetsHelpSetUpYourAccount from '@/components/reusables/LetsHelpSetUpYourAccount';
import SecureFinancialManagement from '@/components/landing-page-components/SecureFinancialManagement';
import SubscribeToOurNewsletter from '@/components/landing-page-components/SubscribeToOurNewsletter';
import TransfromYourBankingJourney from '@/components/reusables/TransfromYourBankingJourney';

const Landing = () => {
  return (
    <main className="flex flex-col space-y-12 py-40 lg:space-y-[224px] lg:py-44">
      <LandingHero />
      <FeaturesAndBenefits />
      <SecureFinancialManagement />
      <EndlessQualityFeatures />
      <TransfromYourBankingJourney />
      <LetsHelpSetUpYourAccount />
      <GetStartedWithFinowise />
      <SubscribeToOurNewsletter />
    </main>
  );
};

export default Landing;
