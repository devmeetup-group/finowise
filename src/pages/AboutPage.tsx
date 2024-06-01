import FinowiseMobileApp from '@/components/about-page-components/FinowiseMobileApp';
import AboutHero from '@/components/about-page-components/AboutHero';
import TransfromYourBankingJourney from '@/components/reusables/TransfromYourBankingJourney';

const AboutPage = () => {
  return (
    <main className="overflow-hidden px-4 py-6 md:px-12 xl:px-[7.5rem]">
      <AboutHero />
      <FinowiseMobileApp />
      <div className="mt-10">
        <TransfromYourBankingJourney variant="other" />
      </div>
    </main>
  );
};

export default AboutPage;
